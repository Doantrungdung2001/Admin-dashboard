import { Typography,Table,Button } from "antd";
import React, { useEffect, useState } from 'react';
import StoreAdmin from "../../services/StoreAdmin";
function Confirm(){

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '作成日日',
      dataIndex: 'creationdate',
    },
    {
      title: '確認日日',
      dataIndex: 'confirmationdate',
    },
    {  
      title: '状態',
      dataIndex: 'situation',
      key: 'situation',
      render: (text, record) => (
      <>
        <Button type="primary" style={{ background: "red" }}>
          Action 1
        </Button>
        <Button type="primary" style={{ background: "red" }}>
          Action 2
        </Button>
        <Button type="primary" style={{ background: "red" }}>
          Action 3
        </Button>
      </>
      ),
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record) => (
        <>
          <Button type="primary" style={{ background: "red" }}>
            Action 1
          </Button>
          <Button type="primary" style={{ background: "blue" }}>
            Action 2
          </Button>
          <Button type="primary" style={{ background: "green" }}>
            Action 3
          </Button>
        </>
        ),
    }
  ]
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);


  useEffect(() => {
    getData();
  }, []);  


  const getData = async () => {
    try {
      const response = await StoreAdmin.fetchData();
      setloading(false);
      setstate(
        response.map(row => ({
          key: row.id, // Thêm thuộc tính key với giá trị là id
          id: row.id,
          creationdate: row.business_hour,
          confirmationdate: row.business_hour,
        }))
      );
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };


    return(
        <div>
            <Typography.Text 
                strong
                style={{fontSize: 30,display: 'flex',alignItems: 'center',justifyContent: 'center',padding : "50px"}}
            >
                喫茶店登録確認</Typography.Text>
            {
              loading ? ("Loading") :(
                <Table 
                  style={{height: "80vh",width: "85vw"}} 
                  bordered 
                  dataSource={state} 
                  columns={columns} 
                  scroll={{y : 500}}
                />
              )
            }    
            

        </div>
    )
}

export default Confirm;