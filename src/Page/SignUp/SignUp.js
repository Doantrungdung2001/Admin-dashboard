
import React from 'react';
import { DatePicker, TimePicker } from 'antd';
import './Signup.css';

function SignUp() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập
  };

  const formStyle = {
    backgroundColor: 'white', // Màu nền của form là màu trắng
  };

  const screenStyle = {
    backgroundColor: '#FF1493', // Màu nền của màn hình là màu đỏ tím
    minHeight: '100vh', // Đảm bảo màn hình có ít nhất chiều cao là 100% viewport
  };

  const datePickerStyle = {
    width: '100%', // Đặt chiều rộng của DatePicker là 100%
    height: '43px', // Đặt chiều cao của DatePicker
    fontSize: '18px', // Đặt kích thước font chữ
  };

  return(
    <div className="signup-container" style={screenStyle}>
    <form className="signup-form" style={formStyle} onSubmit={handleSubmit}>
      <h2>新規登録</h2>
      <div className="form-group">
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="name">名前:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-col">
            <label htmlFor="telephone">電話番号:</label>
            <input type="tel" id="telephone" name="telephone" required />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="date">生年月日:</label>
            <DatePicker id="date" name="date" style={datePickerStyle} required />
          </div>
          <div className="form-col">
            <label htmlFor="telephone">メールアドレス:</label>
            <input type="tel" id="telephone" name="telephone" required />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="name">国:</label>
              <select id="country" name="country" required>
                <option value="">から参りました</option>
                <option value="jp">日本</option>
                <option value="vn">ベトナム</option>
                <option value="us">アメリカ</option>
                <option value="world">他の国</option>
                
                {/* Thêm các tùy chọn quốc gia khác vào đây */}
              </select>
          </div>
          <div className="form-col">
            <label htmlFor="name">性別:</label>
              <select id="gender" name="gender" required>
                <option value="">Chọn giới tính</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
                {/* Thêm các tùy chọn giới tính khác vào đây */}
              </select>
          </div>
        </div>
      </div>
      <button type="submit" style={{backgroundColor: "blue", color:"white" , padding: "10px 20px"}}>Sign Up</button>
    </form>
  </div>
  ); 
}

export default SignUp;