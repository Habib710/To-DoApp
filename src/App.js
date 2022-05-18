import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import Navber from './Components/Hearder/Navber';
import Home from './Components/Home/Home';
import MyTask from './Components/MyTask/MyTask';
import Requeir from './Components/Requeir/Requeir';
import Login from './Login/Login';
import SingUp from './Login/SiginUp/SignUp';


function App() {
  return (
    <div>
      <Navber></Navber>
     
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/add' element={
          <Requeir>
        <AddTask></AddTask>
        </Requeir>
        }></Route>
        <Route path='/my' element={<MyTask></MyTask>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SingUp></SingUp>}></Route>



      </Routes>
     
    </div>
  );
}

export default App;
