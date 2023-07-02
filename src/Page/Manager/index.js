import { Typography,Table,Button } from "antd";
import React, { useEffect, useState } from 'react';
import StoreAdmin from "../../services/StoreAdmin";

function Manager(){

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id', 
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
      const [state, setstate] = useState([]);
      const [loading, setloading] = useState(true);

      const handleButtonClick = () => {
        // Xử lý logic khi button được click
        // history.push('/admin/manage/content');
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
              name: row.name,
              introduction: row.introduction,
              address: row.address,
              businesshours: row.business_hour,
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
              喫茶店
            </Typography.Text>

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
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '50px' }}>
                <Button type="primary" style={{ fontWeight: 'bold', fontSize: 17 }} onClick={handleButtonClick} >追加</Button>
            </div>
        </div>
    )
}

export default Manager;