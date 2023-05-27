import { Badge, Image, Space, Typography } from 'antd';
import { BellFilled, MailOutlined } from '@ant-design/icons';
function AppHeader() {
    return (
        <div className="AppHeader">
            <Typography.Title style={{ color: 'white' }}>CafeMapp100</Typography.Title>
            <Image 
                width={40}
                src="https://i.pinimg.com/originals/20/f1/2d/20f12dc9d9a9ed7f397e9fc43abbdffe.jpg"
            >
            </Image>
            <Space>
                <Badge>
                    <MailOutlined style={{ fontSize: 24, color: 'white' }}/>
                </Badge>
                <Badge count = {20}>
                    <BellFilled style={{ fontSize: 24, color: 'white' }} />
                </Badge>
            </Space>
        </div>
    )
}

export default AppHeader;