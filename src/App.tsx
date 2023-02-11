import logo from './logo.svg';
import './App.scss';
import { Button, DatePicker, Space, version } from 'antd';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>antd version: {version}</h1>
        <Space>
          <DatePicker />
          <Button type="primary">Primary Button</Button>
        </Space>
      </header>
    </div>
  );
};

export default App;
