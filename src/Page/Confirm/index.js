import { Typography,Table } from "antd";

function Confirm(){
    const dataSource = [
        {
          key: '1',
          ID:102,
          creationdate : '22:16 ngay 03/01/2023',
          confirmationdate : '22:38 ngay 03/01/2023',
          situation: 'ACCEPTED',
          operation:'詳細を見る',
        },
        {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
          {
            key: '1',
            ID:102,
            creationdate : '22:16 ngay 03/01/2023',
            confirmationdate : '22:38 ngay 03/01/2023',
            situation: 'ACCEPTED',
            operation:'詳細を見る',
          },
        
      ];
      
      const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID', 
        },
        {
          title: '作成日日',
          dataIndex: 'creationdate',
          key: 'creationdate',
        },
        {
          title: '確認日日',
          dataIndex: 'confirmationdate',
          key: 'confirmationdate',
        },
        {
          title: '状態',
          dataIndex: 'situation',
          key: 'situation',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
          },
      ];
    return(
        <div>
            <Typography.Text 
                strong
                style={{fontSize: 30,display: 'flex',alignItems: 'center',justifyContent: 'center',padding : "50px"}}
            >
                喫茶店登録確認</Typography.Text>
            <Table style={{height: "80vh",width: "80vw"}} dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default Confirm;