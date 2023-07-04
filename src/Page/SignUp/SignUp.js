
import React from 'react';
import { DatePicker} from 'antd';

function SignUp() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập
  };

  const formGroup = {
    marginBottom: '25px'
  };

  const formRow = {
    display: 'flex',
    justifyContent: 'space-between'
  };

 const formLable ={
  display: 'block',
  marginBottom: '5px'
 }; 
  const formCols = {
    flex: '1',
    marginRight: '10px' 
  };

  const formInput = {
    width: '100%', // Đặt chiều rộng của DatePicker là 100%
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  const datePickerStyle = {
    width: '100%', // Đặt chiều rộng của DatePicker là 100%
    height: '43px', // Đặt chiều cao của DatePicker
    fontSize: '18px', // Đặt kích thước font chữ
  };

  return( 
    <div 
      style={{backgroundColor: '#FF1493',minHeight: '100vh',display:'flex',justifyContent: 'center', alignItems: 'center', height: '100vh'}}
    >
    <form style={{backgroundColor: 'white',background: 'f1f1f1',width: '500px', padding: '20px', borderRadius: '4px' }} onSubmit={handleSubmit}>
      <h2 style={{textAlign: 'left', marginBottom: '20px'}}>新規登録</h2>
      <div style={formGroup}>
        <div style={formRow}>
          <div style={formCols}>
            <label style={formLable} htmlFor="name">名前:</label>
            <input style={formInput} type="text" id="name" name="name" required />
          </div>
          <div className="form-col">
            <label style={formLable} htmlFor="telephone">電話番号:</label>
            <input style={formInput} type="tel" id="telephone" name="telephone" required />
          </div>
        </div>
      </div>
      <div style={formGroup}>
        <div style={formRow}>
          <div style={formCols}>
            <label style={formLable} htmlFor="date">生年月日:</label>
            <DatePicker id="date" name="date" style={datePickerStyle} required />
          </div>
          <div style={formCols}>
            <label style={formLable} htmlFor="telephone">メールアドレス:</label>
            <input style={formInput} type="tel" id="telephone" name="telephone" required />
          </div>
        </div>
      </div>
      <div style={formGroup}>
        <div style={formRow}>
          <div style={formCols}>
            <label style={formLable} htmlFor="name">国:</label>
              <select id="country" name="country" required>
                <option value="">から参りました</option>
                <option value="jp">日本</option>
                <option value="vn">ベトナム</option>
                <option value="us">アメリカ</option>
                <option value="world">他の国</option>
                
                {/* Thêm các tùy chọn quốc gia khác vào đây */}
              </select>
          </div>
          <div style={formCols}>
            <label style={formLable} htmlFor="name">性別:</label>
              <select id="gender" name="gender" required>
                <option value="">Chọn giới tính</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
                {/* Thêm các tùy chọn giới tính khác vào đây */}
              </select>
          </div>
        </div>
      </div>
      <button type="submit" style={{backgroundColor: "blue", color:"white" , padding: "10px 20px", width: "100%" , borderRadius: "4px", border: "none", cursor: "pointer"}}>Sign Up</button>
    </form>
  </div>
  ); 
}

export default SignUp;