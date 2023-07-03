import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faLocation } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';

const RegisterDrinkShop = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted

    const formik = useFormik({
        initialValues: {
            coffeeShopName: '',
            address: '',
            intro: '',
            businessHoursS: '',
            businessHoursE: '',
            quantity: '',
            numberOfSeats: '',
            frontImg: '',
            viewImg: '',
            businessPossibilityImg: '',
            insideImg: '',
            airConditionImg: '',
            parkingCoffeeShopImg: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="h-screen flex items-center font-sans">
            <div className="w-5/6 m-auto ">
                <form onSubmit={formik.handleSubmit}>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    <div className="py-4">
                                        <h1 className="text-3xl font-bold ">喫茶店の登録フォーム</h1>
                                        <h2 className="text-lg">以下のボタンをクリックして、現在地を利用できます。</h2>
                                        <button className=" relative bg-teal-500 rounded-md p-1 px-3 focus:outline-none hover:bg-teal-300 active:bg-teal-400">
                                            <FontAwesomeIcon icon={faLocation} className="text-white" />
                                            <span className="text-white uppercase font-bold after:content-['*'] after:ml-0.5 after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                Use my location
                                            </span>
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="py-4 ">
                                <td colSpan="2">
                                    <div className="flex flex-col py-1">
                                        <label className="m-0" htmlFor="coffeeShopName">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl ">
                                                喫茶店の名前
                                            </span>
                                        </label>
                                        <input
                                            className="outline-none p-1 border-t-0 border-x-0 border-b-2 border-slate-400 focus:border-indigo-500 transition-all"
                                            id="coffeeShopName"
                                            name="coffeeShopName"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.coffeeShopName}
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
                                        <label className="m-0" htmlFor="email">
                                            紹介文
                                        </label>
                                        <input
                                            className=" border-b-2 border-slate-400 focus:border-indigo-500 outline-none transition-all "
                                            id="address"
                                            name="address"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.intro}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <label className="m-0" htmlFor="businessHoursS">
                                            営業時間
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
                                        <label className="m-0" htmlFor="numberOfSeats">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                席の数
                                            </span>
                                        </label>
                                        <input
                                            className="text-center border-b-2 border-slate-400 focus:border-indigo-500 outline-none transition-all "
                                            id="numberOfSeats"
                                            name="numberOfSeats"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.numberOfSeats}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="frontImg">
                                            喫茶店のフロント
                                        </div>
                                        <div className="w-5/6 border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.frontImg.slice(
                                                    formik.values.frontImg.search('fakepath') + 9,
                                                    formik.values.frontImg.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="frontImg"
                                                name="frontImg"
                                                type="file"
                                                onChange={formik.handleChange}
                                                value={formik.values.frontImg}
                                            />
                                            <label className="cursor-pointer" htmlFor="frontImg">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="frontImg">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                喫茶店のビュー
                                            </span>
                                        </div>
                                        <div className="w-full border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.frontImg.slice(
                                                    formik.values.frontImg.search('fakepath') + 9,
                                                    formik.values.frontImg.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="frontImg"
                                                name="frontImg"
                                                type="file"
                                                onChange={formik.handleChange}
                                                value={formik.values.frontImg}
                                            />
                                            <label className="cursor-pointer" htmlFor="frontImg">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="frontImg">
                                            喫茶店のフロント
                                        </div>
                                        <div className="w-5/6 border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.frontImg.slice(
                                                    formik.values.frontImg.search('fakepath') + 9,
                                                    formik.values.frontImg.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="frontImg"
                                                name="frontImg"
                                                type="file"
                                                onChange={formik.handleChange}
                                                value={formik.values.frontImg}
                                            />
                                            <label className="cursor-pointer" htmlFor="frontImg">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="frontImg">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                喫茶店のビュー
                                            </span>
                                        </div>
                                        <div className="w-full border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.frontImg.slice(
                                                    formik.values.frontImg.search('fakepath') + 9,
                                                    formik.values.frontImg.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="frontImg"
                                                name="frontImg"
                                                type="file"
                                                onChange={formik.handleChange}
                                                value={formik.values.frontImg}
                                            />
                                            <label className="cursor-pointer" htmlFor="frontImg">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="frontImg">
                                            喫茶店のフロント
                                        </div>
                                        <div className="w-5/6 border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.frontImg.slice(
                                                    formik.values.frontImg.search('fakepath') + 9,
                                                    formik.values.frontImg.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="frontImg"
                                                name="frontImg"
                                                type="file"
                                                onChange={formik.handleChange}
                                                value={formik.values.frontImg}
                                            />
                                            <label className="cursor-pointer" htmlFor="frontImg">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-1/2">
                                    <div className="flex flex-col">
                                        <div className="m-0" htmlFor="frontImg">
                                            <span className="relative after:content-['*'] after:text-red-500 after:absolute after:top-[-6px] after:right-[-12px] after:text-xl">
                                                喫茶店のビュー
                                            </span>
                                        </div>
                                        <div className="w-full border-b-2 border-slate-400 flex justify-between">
                                            <span className="italic">
                                                {formik.values.frontImg.slice(
                                                    formik.values.frontImg.search('fakepath') + 9,
                                                    formik.values.frontImg.length,
                                                )}
                                            </span>
                                            <input
                                                className="hidden"
                                                id="frontImg"
                                                name="frontImg"
                                                type="file"
                                                onChange={formik.handleChange}
                                                value={formik.values.frontImg}
                                            />
                                            <label className="cursor-pointer" htmlFor="frontImg">
                                                <FontAwesomeIcon icon={faImage} />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase mt-4"
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
