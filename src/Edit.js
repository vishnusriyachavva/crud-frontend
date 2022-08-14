import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Edit = () => {

  const initialData = {
    stid: '',
    stname: '',
  };
  const [input, setInput] = useState(initialData);
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get("http://localhost:8080/Report");
      setInput(response.data[0])
    } catch {
      console.log("error");
    }
  }
  const inputHandling = (e) => {
    const name1 = e.target.name;
    const value1 = e.target.value;
    setInput({ ...input, [name1]: value1 });
    
  };
  const submithandle = (e) => {
    e.preventDefault();
    // console.log(input);
    handleUpdate(input);
    setInput(initialData);
  };

  const handleUpdate = (input) => {
    toast.info('updated', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    axios.post("http://localhost:8080/edit", input)
      .then(function (response) {
        alert("updated")
      })
  }

  return (
    <div>
        

        <div>
            
            <div className="ui centered card">
                <form className="ui form" onSubmit={submithandle}>
                    

                    <div className="field">
                        <label><h2>Username</h2></label>

                        <input
                        type="text"
                        name="stid"
                        placeholder="Username"
                        value={input.stid}
                        onChange={inputHandling}
                      />

                    </div>
                    <div className="field">
                        <label><h2>Password</h2></label>
                        
                        <input
                        type="password"
                        name="stname"
                        value={input.stname}
                        placeholder="Password"
                        onChange={inputHandling}
                      />
                    </div>

                    <button className="button button2" type="submit" ><h3>LOGIN</h3></button>
                    

                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
);
};
export default Edit;