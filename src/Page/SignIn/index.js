import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { UserService } from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../Components/AuthContext';

function SignIn() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            const body = {
                ...values,
            };
            const signIn = async () => {
                const res = await UserService.createSession(body);
                authContext.login(res.user.id);
                navigate('/');
                return res;
            };
            signIn();
        },
    });

    return (
        <section className="rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[24rem] shadow-lg p-6">
            <h1 className="text-xl text-center">CafeMap100にログインする</h1>
            <div className="text-center">
                <img
                    className="border-2 border-black h-5/12 w-3/4 inline-block mb-3"
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/357762729_998953224488752_6671092085381659137_n.png?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=aee45a&_nc_ohc=2evBn0v_35kAX_-IuaQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQmAsYqpwHUPV6tj6fvZckwFfWi12Gjzhzehr_Gpt4igw&oe=64CB7D2E"
                    alt="logo"
                />
            </div>

            <form onSubmit={formik.handleSubmit}>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-full border-2 border-slate-200 rounded-sm p-2 mb-2"
                    placeholder="メール"
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="w-full border-2 border-slate-200 rounded-sm p-2"
                    placeholder="パスワード"
                />
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-40 mb-2"
                    >
                        ログイン
                    </button>
                </div>
                <div className="text-sm text-center">
                    アカウントがない？<NavLink to="/signup">登録する!</NavLink>
                </div>
            </form>
        </section>
    );
}

export default SignIn;
