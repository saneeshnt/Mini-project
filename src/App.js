// import './App.css';
// import Header from './Components/User/Header/Header';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import UserRouters from "./Routers/UserRouters";
import AdminRouters from "./Routers/AdminRouters";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/*" element={<UserRouters />} />
      <Route path="/admin/*" element={<AdminRouters/>}></Route>

  
     
    </Routes>
    <ToastContainer/>
    </BrowserRouter></>
  );
}

export default App;
