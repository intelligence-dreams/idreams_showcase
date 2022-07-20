import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter } from 'react-router-dom';
import Routes_ from './routers/routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <div className=' '>
        <div className='' >
          <Routes_ />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
