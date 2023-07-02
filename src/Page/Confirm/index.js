import { Typography,Table,Button } from "antd";
import React, { useEffect, useState } from 'react';
import StoreAdmin from "../../services/StoreAdmin";
function Confirm(){

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: "center",
      width: "8%"
    },
    {
      title: '作成日日',
      dataIndex: 'creationdate',
      key: 'creationdate',
      align: "center",
      width: "27%"
    },
    {
      title: '確認日日',
      dataIndex: 'confirmationdate',
      align: "center",
      width: "27%"
    },
    {  
      title: '状態',
      dataIndex: 'situation',
      key: 'situation',
      align: "center",
      width: "11%",
      render: (text, record) => {
        if (record.situation === "pending") {
          return (
            <>
              <Button type="primary" style={{ background: "#DEDE16", color: "black" }}>
                確認中
              </Button>
            </>
          );
        }else if (record.situation === "accepted") {
          return (
            <>
              <Button type="primary" style={{ background: "#50C78F", color: "black"  }}>
                許可
              </Button>
            </>
          );
        }else{
          return (
            <>
              <Button type="primary" style={{ background: "#E33963", color: "black"  }}>
                不許可
              </Button>
            </>
          )   
        }
      }
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: "center",
      width: "27%",
      render: (text, record) => {
        if (record.situation === "pending") {
          return (
            <>
              <Button type="primary" style={{ background: "#3A85E0", color: "black" ,marginRight: '15px'}} onClick={handleCheckStoreClick}>
               詳細を見る
              </Button>

              <Button type="primary" style={{ background: "#50C78F", color: "black",marginRight: '15px' }} onClick={handleAcceptStoreClick}>
                許可
              </Button>

              <Button type="primary" style={{ background: "#E33963", color: "black",marginRight: '15px' }} onClick={handleRejectStoreClick}>
                不許可
              </Button>
            </>
          );
        }else if (record.situation === "accepted") {
          return (
            <>
              <Button type="primary" style={{ background: "#3A85E0", color: "black"}} onClick={handleCheckStoreClick}>
               詳細を見る
              </Button>
            </>
          );
        }else{
          return (
            <>
              <Button type="primary" style={{ background: "#3A85E0", color: "black"  }} onClick={handleCheckStoreClick}>
               詳細を見る
              </Button>
            </>
          )   
        }
      }
    }
  ]
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);

  const handleCheckStoreClick= () => {
    // Xử lý logic khi button được click
    
  };
  const handleAcceptStoreClick = () => {
    // Xử lý logic khi button được click
    
  };
  const handleRejectStoreClick = () => {
    // Xử lý logic khi button được click
   
  };
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
          situation: row.status,
          operation: row.status,
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