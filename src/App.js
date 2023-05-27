import { Space } from 'antd';
import './App.css';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Space className='Appbody'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
