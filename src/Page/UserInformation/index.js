import { faCheck, faMinus, faPenToSquare, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Components/AuthContext';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { Switch } from 'antd';

function UserInformation() {
    const authContext = useContext(AuthContext);
    const [user, setUser] = useState(authContext.currentUser);
    // const [data, setData] = useState();
    const [userStores, setUserStores] = useState([]);
    const [count, setCount] = useState(0);
    const [response, setResponse] = useState('');
    const [stateShow, setStateShow] = useState(false);

    const handleData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    console.log('userChange', user);

    function handleGuest(e, numberGuests, storeId) {
        e.preventDefault();
        console.log('do day', numberGuests);
        const updateGuests = async () => {
            const res = await axios.put(`http://127.0.0.1:8000/api/stores/${storeId}/guests`, { guests: numberGuests });
            console.log('update guest: ', res);
            if (res.statusText === 'OK') {
                setCount((prev) => prev + 1);
            }
            console.log(count);
            return res.data;
        };
        updateGuests();
    }

    useEffect(() => {
        console.log('call lay coffe');
        axios
            .get(`http://127.0.0.1:8000/api/stores?user_id=${user.id}`)
            .then((response) => {
                setUserStores(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [count]);
    // console.log(user);
    console.log('store', userStores);

    function handleChangeInfo(e) {
        e.preventDefault();
        const updateUser = async () => {
            const res = await axios.put(`http://127.0.0.1:8000/api/users/${user.id}`, {
                name: user.name,
                email: user.email,
                phone_num: user.phone_num,
                dob: user.dob,
            });
            console.log('res update user :', res.data);
            setResponse(res.data.message);
            setStateShow(true);
            authContext.login(res.data.user);
            return res.data;
        };

        updateUser();
        console.log('updateUser: ', updateUser);
    }

    return (
        <>
            <div className="container p-0">
                <div className="row mt-4">
                    <div className="col-4">
                        <div className="row">
                            <div className="card shadow-lg border" style={{ width: '95%' }}>
                                <div style={{ backgroundColor: '#ccc' }}>
                                    <h6 className="card-title ml-3 mt-2 mb-2">プロファイルのアバター</h6>
                                </div>
                                <div className="card-body">
                                    <img
                                        src="https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg"
                                        className="d-block mr-auto ml-auto"
                                        style={{ height: '160px', width: '160px', borderRadius: '100% ' }}
                                        alt=""
                                    />
                                    <button href="#" className="btn btn-primary d-block mr-auto ml-auto mt-4">
                                        イメジをアップローソ
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="card shadow-lg border" style={{ width: '95%' }}>
                                <div style={{ backgroundColor: '#ccc' }}>
                                    <h6 className="card-title ml-3 mt-2 mb-2">私の起算点</h6>
                                </div>
                                <div className="card-body ">
                                    {userStores.map((userStore, index) => {
                                        return (
                                            <div className="d-flex justify-content-between" key={index}>
                                                <div>
                                                    <p>{userStore.name}</p>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon className="mr-2" icon={faPenToSquare} />
                                                    <Switch className="mr-2" defaultChecked="true" />
                                                    <FontAwesomeIcon
                                                        className="mr-1 pe-auto"
                                                        style={{ cursor: 'pointer' }}
                                                        icon={faPlus}
                                                        onClick={(e) =>
                                                            handleGuest(
                                                                e,
                                                                userStore.a_working_day.guests + 1,
                                                                userStore.id,
                                                            )
                                                        }
                                                    />
                                                    <FontAwesomeIcon
                                                        className="mr-1"
                                                        style={{ cursor: 'pointer' }}
                                                        icon={faMinus}
                                                        onClick={(e) =>
                                                            handleGuest(
                                                                e,
                                                                userStore.a_working_day.guests - 1,
                                                                userStore.id,
                                                            )
                                                        }
                                                    />
                                                    <span className="pl-1 pr-1" style={{ backgroundColor: '#ccc' }}>
                                                        {userStore.a_working_day.guests}/{userStore.max_capacity}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <NavLink to="/registerDrinkShop">
                                        <button href="#" className="btn btn-primary d-block mr-auto ml-auto mt-4">
                                            新しい喫茶店を追加す
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 ml-0">
                        <div className="card w-100 shadow-lg border">
                            <div style={{ backgroundColor: '#ccc' }}>
                                <h6 className="card-title ml-3 mt-2 mb-2">アカワントの基本情報</h6>
                            </div>

                            <form className="p-3">
                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        名前
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        name="name"
                                        value={user.name}
                                        onChange={handleData}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        メルアドルス
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInput"
                                        name="email"
                                        value={user.email}
                                        onChange={handleData}
                                    />
                                </div>
                                <div className="mb-4 d-flex">
                                    <div className="col-6 pl-0">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                            電話番号
                                        </label>
                                        <input
                                            type=""
                                            className="form-control"
                                            name="phone_num"
                                            value={user.phone_num}
                                            onChange={handleData}
                                        />
                                    </div>
                                    <div className="col-6 pl-0 pr-0">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                            生年月日
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="dob"
                                            value={user.dob}
                                            onChange={handleData}
                                        />
                                    </div>
                                </div>
                                <button className="btn btn-primary" onClick={(e) => handleChangeInfo(e)}>
                                    ほぞんする
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={stateShow} style={{ marginTop: '17%' }}>
                {response === 'Update Success!' ? (
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <div>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-success"
                                    style={{ paddingRight: '8px', width: '12px' }}
                                />
                                <span>コメント成功</span>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                                onClick={() => setStateShow(false)}
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="modal-content">
                        <div className="modal-header justify-content-center" style={{ alignItems: 'center' }}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="text-danger"
                                style={{ paddingRight: '8px', width: '12px' }}
                            />
                            <span>コメント失敗</span>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => setStateShow(false)}
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}

export default UserInformation;
