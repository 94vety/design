import { Divider } from 'antd';
import './App.css';
import Home from './componnets/Home/Home';
import Header from './componnets/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <Home />
    </div>
  );
}

export default App;
