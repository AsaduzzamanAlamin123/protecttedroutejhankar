import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './componants/Login/Login';
import { Routes, Route } from "react-router-dom";
import SignUp from './componants/SignUp/SignUp';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import ForNavigate from './componants/ForNavigate/ForNavigate';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
     
     <Routes>
       <Route path='/home' element={
         <RequireAuth>
           <Home></Home>
         </RequireAuth>
       
       }></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signUp' element={<SignUp></SignUp>}></Route>
       <Route path='/fornav' element={<ForNavigate></ForNavigate>}></Route>
     </Routes>
    </div>
  );
}

export default App;
