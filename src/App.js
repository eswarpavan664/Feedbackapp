import logo from './logo.svg';
import './App.css';
import {
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from '../src/screens/DashBoard';
import Loading from '../src/screens/Loading';
import Login from '../src/screens/Login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      

 
          
          <Route path="/" element={<Loading />} />
          <Route path="/DashBoard" element={<DashBoard />} />
         
         
    </Routes>
  </BrowserRouter>
  );
}

export default App;
