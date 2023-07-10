import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faLocation } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import { v4 } from 'uuid';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import { StoreService } from '../../services/StoreServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import moment from 'moment';

import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../Components/AuthContext';
const RegisterDrinkShop = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // const [imgUpload, setImageUpload] = useState(null);
    const [urlObj, setUrlObj] = useState({});
    const [position, setPosition] = useState({});
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const format12hour = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
    // Validate form
    const RegisterSchema = Yup.object().shape({
        coordinates: Yup.string().required('Location 必要!'),
        name: Yup.string().required('喫茶店の名前: 必要!'),
        address: Yup.string().min(2, '短すぎる').max(50, '長すぎる').required('アドレス: 必要!'),
        businessHoursS: Yup.string().matches(format12hour, '開始時間の形式: 8:00am').required('営業時間: 必要!'),
        businessHoursE: Yup.string()
            .matches(format12hour, '時間の形式: 10:00pm')
            .required('終了営業時間: 必要!')
            .test('is-greater', '終了時間をもっと長くする必要があります', function (value) {
                const { businessHoursS } = this.parent; // Lấy giá trị của trường 'startTime' trong form
                if (!businessHoursS || !value) return true; // Nếu trường 'startTime' hoặc 'endTime' rỗng thì bỏ qua validation
                const startTimeMoment = moment(businessHoursS, 'h:mm A'); // Chuyển đổi giá trị của 'startTime' thành một đối tượng moment
                const endTimeMoment = moment(value, 'h:mm A'); // Chuyển đổi giá trị của 'endTime' thành một đối tượng moment
                if (!endTimeMoment.isValid()) return false; // Nếu 'endTime' không hợp lệ thì không validate
                return endTimeMoment.isAfter(startTimeMoment); // Trả về true nếu 'endTime' sau 'startTime'
            }),
        max_capacity: Yup.number()
            .required('席の数 必要!')
            .positive('ポジティブである必要があります!')
            .typeError('数値でなければなりません'),
        front_picture: Yup.string().required('喫茶店のフロント: 必要!'),
        view_picture: Yup.string().required('喫茶店のビュー: 必要!'),
        business_license_pic: Yup.string().required('喫茶店の営業許可証: 必要!'),
        inside_picture: Yup.string().required('喫茶店の中身の写真: 必要!'),
        ac_picture: Yup.string().required('喫茶店のエアコン: 必要!'),
    });

    const formik = useFormik({
        initialValues: {
            coordinates: '',
            name: '',
            address: '',
            introduction: '',
            businessHoursS: '',
            businessHoursE: '',
            max_capacity: '',
            front_picture: '',
            view_picture: '',
            business_license_pic: '',
            inside_picture: '',
            ac_picture: '',
            parking_lot: '',
        },
        validationSchema: RegisterSchema,
        validateOnChange: false,
        onSubmit: (values) => {
            const body = {
                ...values,
                ...urlObj,
                business_hour: values.businessHoursS + ' - ' + values.businessHoursE,
                air_condition: values.ac_picture ? true : false,
                parking_lot: values.parking_lot ? true : false,
                // owner_id: 1,
                owner_id: authContext.currentUser.id,
            };
            const createStores = async () => {
                console.log(JSON.stringify(body));
                const res = await StoreService.create(body);
                toast('Success!');
            };
            createStores();

            navigate('/');
        },
    });

    const handleUploadImage = (typeImg, imgUpload, filePath) => {
        console.log(filePath);
        const imgRef = ref(storage, `store-images/${imgUpload.name + v4()}`);
        uploadBytes(imgRef, imgUpload).then((snapShot) => {
            getDownloadURL(snapShot.ref).then((url) => {
                formik.setFieldValue(typeImg, filePath);
                setUrlObj({
                    ...urlObj,
                    [`${typeImg}`]: url,
                });
            });
        });
    };

    console.log('🚀 ~ file: index.js:101 ~ RegisterDrinkShop ~ formik.errors.name:', formik.errors.address);
    const handleCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setPosition({
                longitude: longitude,
                latitude: latitude,
            });

            formik.setFieldValue('coordinates', latitude + ', ' + longitude);
            // use the latitude and longitude
        });
    };

    return (
        <div className="h-screen flex items-center font-sans">
            <ToastContainer />
            <div className="w-5/6 m-auto">
                <form onSubmit={formik.handleSubmit}>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    <div className="py-4">
                                        <h1 className="text-3xl font-bold ">喫茶店の登録フォーム</h1>
                                        {formik.errors && Object.keys(formik.errors).length > 0 && (
                                            <div className="text-red-500 bold mb-3">
                                                {Object.values(formik.errors)[0]}
                                            </div>
                                        )}
                                        <h2 className="text-lg">以下のボタンをクリックして、現在地を利用できます。</h2>
                                        <div
                                            className=" relative bg-teal-500 rounded-md p-1 px-3 focus:outline-none hover:bg-teal-300 active:bg-teal-400 w-fit"
                                            onClick={handleCurrentLocation}
                                        >
                                            <FontAwesomeIcon icon={faLocation} className="text-white" />
                                            <span className="text-white uppercase font-bold after:content-['*'] after:ml-0.5 after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                Use my location {formik.values.coordinates}
                                            </span>
                                        </div>
                                        {formik.errors.coordinates && formik.touched.coordinates && (
                                            <div>{formik.errors.coordinates}</div>
                                        )}
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="py-4 ">
                                <td colSpan="2">
                                    <div className="flex flex-col py-1">
                                        <label className="m-0" htmlFor="name">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl ">
                                                喫茶店の名前
                                            </span>
                                        </label>
                                        <input
                                            className="outline-none p-1 border-t-0 border-x-0 border-b-2 border-slate-400 focus:border-indigo-500 transition-all"
                                            id="name"
                                            name="name"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className="flex flex-col">
                                        <label className="m-0" htmlFor="address">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                アドレス
                                            </span>
                                        </label>
                                        <input
                                            className="border-b-2 border-slate-400 focus:border-indigo-500 outline-none transition-all "
                                            id="address"
                                            name="address"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.address}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className="flex flex-col">
                                        <label className="m-0" htmlFor="introduction">
                                            紹介文
                                        </label>
                                        <input
                                            className=" border-b-2 border-slate-400 focus:border-indigo-500 outline-none transition-all "
                                            id="introduction"
                                            name="introduction"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.introduction}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <label className="m-0" htmlFor="businessHoursS">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                営業時間
                                            </span>
                                        </label>
                                        <div className="w-10/12">
                                            <input
                                                className="w-5/12 border-b-2 border-slate-400 focus:border-indigo-500 outline-none transition-all text-center "
                                                id="businessHoursS"
                                                name="businessHoursS"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.businessHoursS}
                                            />
                                            <span className="w-2/12 h-[14px] border-b-2 inline-block">&nbsp;</span>
                                            <input
                                                className="w-5/12 border-b-2 border-slate-400 focus:border-indigo-500 outline-none transition-all text-center"
                                                id="businessHoursE"
                                                name="businessHoursE"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.businessHoursE}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="w-1/2">
                                    <div className=" flex flex-col">
                                        <label className="m-0" htmlFor="max_capacity">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                席の数
                                            </span>
                                        </label>
                                        <input
                                            className="text-center border-b-2 border-slate-400 focus:border-indigo-500 outline-none transition-all "
                                            id="max_capacity"
                                            name="max_capacity"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.max_capacity}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="front_picture">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                喫茶店のフロント
                                            </span>
                                        </div>
                                        <div className="w-5/6 border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.front_picture.slice(
                                                    formik.values.front_picture.search('fakepath') + 9,
                                                    formik.values.front_picture.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="front_picture"
                                                name="front_picture"
                                                type="file"
                                                onChange={(e) =>
                                                    handleUploadImage(e.target.id, e.target.files[0], e.target.value)
                                                }
                                            />
                                            <label className="cursor-pointer" htmlFor="front_picture">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="view_picture">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                喫茶店のビュー
                                            </span>
                                        </div>
                                        <div className="w-full border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.view_picture.slice(
                                                    formik.values.view_picture.search('fakepath') + 9,
                                                    formik.values.view_picture.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="view_picture"
                                                name="view_picture"
                                                type="file"
                                                onChange={(e) =>
                                                    handleUploadImage(e.target.id, e.target.files[0], e.target.value)
                                                }
                                            />
                                            <label className="cursor-pointer" htmlFor="view_picture">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="business_license_pic">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                喫茶店の営業許可証
                                            </span>
                                        </div>
                                        <div className="w-5/6 border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.business_license_pic.slice(
                                                    formik.values.business_license_pic.search('fakepath') + 9,
                                                    formik.values.business_license_pic.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="business_license_pic"
                                                name="business_license_pic"
                                                type="file"
                                                onChange={(e) =>
                                                    handleUploadImage(e.target.id, e.target.files[0], e.target.value)
                                                }
                                            />
                                            <label className="cursor-pointer" htmlFor="business_license_pic">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="inside_picture">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                喫茶店の中身の写真
                                            </span>
                                        </div>
                                        <div className="w-full border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.inside_picture.slice(
                                                    formik.values.inside_picture.search('fakepath') + 9,
                                                    formik.values.inside_picture.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="inside_picture"
                                                name="inside_picture"
                                                type="file"
                                                onChange={(e) =>
                                                    handleUploadImage(e.target.id, e.target.files[0], e.target.value)
                                                }
                                            />
                                            <label className="cursor-pointer" htmlFor="inside_picture">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="ac_picture">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                喫茶店のエアコン
                                            </span>
                                        </div>
                                        <div className="w-5/6 border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.ac_picture.slice(
                                                    formik.values.ac_picture.search('fakepath') + 9,
                                                    formik.values.ac_picture.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="ac_picture"
                                                name="ac_picture"
                                                type="file"
                                                onChange={(e) =>
                                                    handleUploadImage(e.target.id, e.target.files[0], e.target.value)
                                                }
                                            />
                                            <label className="cursor-pointer" htmlFor="ac_picture">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="parking_lot">
                                            <span>喫茶店の駐車場</span>
                                        </div>
                                        <div className="w-full border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.parking_lot.slice(
                                                    formik.values.parking_lot.search('fakepath') + 9,
                                                    formik.values.parking_lot.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="parking_lot"
                                                name="parking_lot"
                                                type="file"
                                                onChange={(e) =>
                                                    handleUploadImage(e.target.id, e.target.files[0], e.target.value)
                                                }
                                            />
                                            <label className="cursor-pointer" htmlFor="parking_lot">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <NavLink to="/">
                            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded uppercase mt-4 w-36 mr-4">
                                Back
                            </button>
                        </NavLink>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mt-4 w-40"
                            type="submit"
                        >
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterDrinkShop;
