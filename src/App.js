// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Products from './Products';
import Login from './Login';

function App() {
  return (
    <div className="App">
     <Products/>
     <Login/>
    </div>
  );
}

export default App;
