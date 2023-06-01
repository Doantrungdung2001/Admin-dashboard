import { Typography,Table,Button } from "antd";

function Manager(){

    const dataSource = [
        {
          key: '1',
          ID:102,
          name : '22:16 ngay 03/01/2023',
          introduction : '22:38 ngay 03/01/2023',
          address: 'ACCEPTED',
          businesshours:'詳細を見る',
        },
    ]

    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID', 
        },
        {
          title: '名前',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '紹介文',
          dataIndex: 'introduction',
          key: 'introduction',
        },
        {
          title: '住所',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: '営業時間',
            dataIndex: 'businesshours',
            key: 'businesshours',
          },
      ];

      const handleButtonClick = () => {
        // Xử lý logic khi button được click
        // history.push('/admin/manage/content');
      };
    return(
        <div>
            <Typography.Text 
                strong
                style={{fontSize: 30,display: 'flex',alignItems: 'center',justifyContent: 'center',padding : "50px"}}
            >
                喫茶店</Typography.Text>
            <Table style={{height: "65vh",width: "80vw"}} dataSource={dataSource} columns={columns} />
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '50px' }}>
                <Button type="primary" style={{ fontWeight: 'bold', fontSize: 17 }} onClick={handleButtonClick} >追加</Button>
            </div>
        </div>
    )
}

export default Manager;