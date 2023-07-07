import React, { useContext, useEffect, useState } from 'react';
import { DatePicker, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Components/AuthContext';

function SignUp() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng nhập
    };

    const formGroup = {
        marginBottom: '25px',
    };

    const formRow = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const formLable = {
        display: 'block',
        marginBottom: '5px',
    };
    const formCols = {
        flex: '1',
        marginRight: '10px',
    };

    const formInput = {
        width: '100%', // Đặt chiều rộng của DatePicker là 100%
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const datePickerStyle = {
        width: '100%', // Đặt chiều rộng của DatePicker là 100%
        height: '43px', // Đặt chiều cao của DatePicker
        fontSize: '18px', // Đặt kích thước font chữ
    };

    const [params, setParams] = useState({
        name: '',
        email: '',
        phone_num: '',
        password: '123456',
        gender: 'male',
        role: 'guest_and_owner',
        dob: '',
        nationality: 'japanese',
    });

    const handleRegister = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_BACKEND_API_URL}/auth/register`, {
                name: params.name,
                email: params.email,
                phone_num: params.phone_num,
                password: params.password,
                gender: params.gender,
                role: params.role,
                dob: params.dob,
                nationality: params.nationality,
            })
            .then((res) => {
                console.log(res);
                authContext.login(res.data.user);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                message.error('サインアップが失敗しました！', 10, {
                    // Tăng thời gian hiển thị và kiểu hiển thị của thông báo
                    style: {
                        fontSize: '30px', // Tùy chỉnh kích thước font chữ
                    },
                });
            });
    };

    useEffect(() => {
        console.log(params);
    }, [params]);

    return (
        <div
            style={{
                backgroundColor: '#FF1493',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <form
                style={{
                    backgroundColor: 'white',
                    background: 'f1f1f1',
                    width: '500px',
                    padding: '20px',
                    borderRadius: '4px',
                }}
                onSubmit={handleSubmit}
            >
                <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>新規登録</h2>
                <div style={formGroup}>
                    <div style={formRow}>
                        <div style={formCols}>
                            <label style={formLable} htmlFor="name">
                                名前:
                            </label>
                            <input
                                style={formInput}
                                type="text"
                                id="name"
                                name="name"
                                value={params.name}
                                onChange={(e) => setParams({ ...params, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-col">
                            <label style={formLable} htmlFor="telephone">
                                電話番号:
                            </label>
                            <input
                                style={formInput}
                                type="tel"
                                id="telephone"
                                name="telephone"
                                value={params.phone_num}
                                onChange={(e) => setParams({ ...params, phone_num: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div style={formGroup}>
                    <div style={formRow}>
                        <div style={formCols}>
                            <label style={formLable} htmlFor="date">
                                生年月日:
                            </label>
                            <DatePicker
                                id="date"
                                name="date"
                                style={datePickerStyle}
                                onChange={(date, dateString) => setParams({ ...params, dob: dateString })}
                                required
                            />
                        </div>
                        <div style={formCols}>
                            <label style={formLable} htmlFor="email">
                                メールアドレス:
                            </label>
                            <input
                                style={formInput}
                                type="email"
                                id="email"
                                name="email"
                                value={params.email}
                                onChange={(e) => setParams({ ...params, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div style={formGroup}>
                    <div style={formRow}>
                        <div style={formCols}>
                            <label style={formLable} htmlFor="name">
                                国:
                            </label>
                            <select
                                id="country"
                                name="country"
                                onChange={(e) => setParams({ ...params, nationality: e.target.value })}
                                defaultValue={'japanese'}
                                required
                            >
                                <option value="japanese">日本</option>
                                <option value="vietnamese">ベトナム</option>
                                <option value="else">他の国</option>

                                {/* Thêm các tùy chọn quốc gia khác vào đây */}
                            </select>
                        </div>
                        <div style={formCols}>
                            <label style={formLable} htmlFor="name">
                                性別:
                            </label>
                            <select
                                style={formLable}
                                id="gender"
                                name="gender"
                                onChange={(e) => setParams({ ...params, gender: e.target.value })}
                                defaultValue={'male'}
                                required
                            >
                                <option value="male">男性</option>
                                <option value="female">女性</option>
                                {/* Thêm các tùy chọn giới tính khác vào đây */}
                            </select>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    onClick={(e) => handleRegister(e)}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SignUp;
