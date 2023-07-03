import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Page/Dashboard';
import Manager from '../../Page/Manager/index';
import Content from '../../Page/Manager/content';
import Confirm from '../../Page/Confirm';
import AdminLayout from '../../Page/AdminLayout';
import UserLayout from '../../Page/UserLayout';
import UserHomePage from '../../Page/UserHomePage/index';
import SignUp from '../../Page/SignUp/SignUp';

function AppRoutes() {
    return (
        <Routes>
            {/* Define user routes here */}
            <Route path="/" element={<UserLayout />}>
                <Route path="/signup" element={<SignUp />} />
                <Route index element={<UserHomePage />} />
            </Route>

            {/* Define admin routes here */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/admin/manage" element={<Manager />} />
                <Route path="/admin/manage/content" element={<Content />} />
                <Route path="/admin/confirm" element={<Confirm />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
