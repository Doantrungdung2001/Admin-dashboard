import { Space } from "antd";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu";
import AppFooter from "../../Components/AppFooter";
import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div className="App">
            <AppHeader />
            <Space className="Appbody">
                <SideMenu />
                <Outlet />
            </Space>
            <AppFooter />
        </div>
    );
}

export default AdminLayout;
