import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Delete = () => {
    const [stid, setstid] = useState('');
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const dele = (event) => {
        toast.info('deleted', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        event.preventDefault();
        Axios.post("http://localhost:8080/del",{stid:stid})
        .then(()=>
           {
              
           }
        )
     };
     
    return (
        <div>
           <center>  <br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br><br></br><input type="text" name="stid" onChange={(e)=>{
               setstid(e.target.value)
         }}/><br></br> <br></br><br></br>
         <button onClick={handleShow}>Delete</button></center>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this record?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={dele}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
        </div>
    );
};

export default Delete;