import {
    AppstoreAddOutlined,
    UnorderedListOutlined,
    AppstoreOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function SideMenu() {
    const navigate = useNavigate();
    const menuStyle = {
        backgroundColor: "rgb(4, 4, 82)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    };
    return (
        <div className="SideMenu">
            <Menu
                style={menuStyle}
                onClick={(item) => {
                    //item.key
                    navigate(item.key);
                }}
                items={[
                    {
                        label: "マップ画画",
                        icon: <AppstoreAddOutlined />,
                        key: "/admin",
                    },
                    {
                        label: "喫茶店管理",
                        icon: <UnorderedListOutlined />,
                        key: "/admin/manage",
                    },
                    {
                        label: "喫茶店登録確認",
                        icon: <AppstoreOutlined />,
                        key: "/admin/confirm",
                    },
                ]}
            ></Menu>
        </div>
    );
}

export default SideMenu;
