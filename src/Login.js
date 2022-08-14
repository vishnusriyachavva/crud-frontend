import React, {useState,useEffect} from 'react';
// import {NavLink,useNavigate} from 'react-router-dom';
import Axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
   const [stid, setstid] = useState('');
   const [stname, setstname] = useState('');
  
   const handle = (event) => {
      toast.info('inserted', {
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         });
      localStorage.setItem('Name', stid);
      localStorage.setItem('Password', stname);
      event.preventDefault();
      Axios.post("http://localhost:8080/insert",{stid,stname})
      .then(()=>
         {
           
         }
      )
      setstid('')
      setstname('')
   };
   
   return (
      <center>
         <div className="App">
            <br></br><br></br><br></br><br></br><br></br>
         <h2>Student Registration Number :</h2><br></br>
         <input type="text" name="stid" onChange={(e)=>{
               setstid(e.target.value)
         }}/><br></br><br></br><br></br>
         <h2>Password :</h2><br></br>
         <input
            type="password"
            name="stname"
            onChange={(e) => {setstname(e.target.value)}}
         />
         <div><br>
         </br><br></br>
            <button onClick={handle} className="btn-dark">Submit</button>
         </div>
      </div>
      <ToastContainer />
      </center>
   );
};
export default Login;