import { Badge, Space, Typography } from 'antd';
import { BellFilled, TeamOutlined } from '@ant-design/icons';
function AppHeader() {
    return (
        <div className="AppHeader">
            <Typography.Title style={{ color: 'white' }}>CafeMap100</Typography.Title>
            <Space>
                <Badge count = {20}>
                    <BellFilled style={{ fontSize: 30, color: 'white',padding: "10px" }} />
                </Badge>
                <Badge>
                    <TeamOutlined style={{ fontSize: 30, color: 'white', padding: "15px" }}/>
                </Badge>
                abcdefgh
            </Space>
        </div>
    )
}

export default AppHeader;