import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Button} from "@mui/material";
const Report = () => {
  const [ev, setev] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get("http://localhost:8080/Report").then((res) => {
      setev(res.data);
    });
  }, []);
  const Dele = (stid) => {
    toast.info('deleted', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    axios.post(`http://localhost:8080/delete/${stid}`).then((res) => {
      alert("successfull");
    });
  };
  
  return (
    <div>
      <h4>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
<th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {ev.map((val) => {
              return (
                <tr key={val.stid}>
                  <td data-label="Name">{val.stid}</td>
                  <td data-label="Age">{val.stname}</td>
                  <td data-label="Age"><img src={val.image} style={{width:150}}/></td>
                  <td data-label="Name">
                  <Button onClick={() => {
                            Dele(val.stid);
                          }}>Del</Button>
                    
                  </td>
                  
                </tr>
                
              );
            })}
          </tbody>
        </table>
      </h4>

      <ToastContainer />
    </div>
  );
};

export default Report;