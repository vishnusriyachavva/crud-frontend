import React, {useState,useEffect} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login_Validation = () => {
   const nav = useNavigate()
   const [stid, setstid] = useState('');
   const [stname, setstname] = useState('');
   const [ev, setev] = useState([]);
   const [statement,setStatement] = useState("");
   let c=0;
   useEffect(() => {
    axios.get("http://localhost:8080/display").then((res) => {
        
      setev(res.data);
    });
  }, []);
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
      
      ev.map((val) => {
            if(val.stid == stid){
               
               
               if(val.stname === stname){
                  c=1
                  setStatement("Valid");
                  console.log("v")
                  return;
               }
            }
            else if(c==0){
               console.log(statement)
               console.log("i")
               setStatement("Invalid user")
            }
      })
      
      event.preventDefault();
     
      setstid('')
      setstname('')
   };
   if(statement=="Valid"){
      nav('Signup')
   }
else if(statement=="Invalid user"){
   alert("Invalid user!!!")
}
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
         </div><br></br><br></br>
         <p>{statement}</p>
      </div>
      <ToastContainer />
      </center>
   );
};
export default Login_Validation;