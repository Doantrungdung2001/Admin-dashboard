import { AppstoreAddOutlined,UnorderedListOutlined,AppstoreOutlined } from "@ant-design/icons";
import {Menu} from "antd"
import { useNavigate } from "react-router-dom";
function SideMenu() {
    const navigate = useNavigate();
    return (
        <div className="SideMenu">
            <Menu
                onClick={(item)=>{
                    //item.key
                    navigate(item.key);
                }}
                items={[
                    {
                        label: "マップ画画",
                        icon:<AppstoreAddOutlined />,
                        key:"/",
                    },
                    {
                        label: "喫茶店管理",
                        icon: <UnorderedListOutlined />,
                        key:"/manage",
                    },
                    {
                        label: "喫茶店登録確認",
                        icon: <AppstoreOutlined />,
                        key:"/confirm",
                    },
                ]}
            >
                
            </Menu>
        </div>
    )
}

export default SideMenu;