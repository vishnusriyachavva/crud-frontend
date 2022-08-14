import React from 'react';
import {Navigate, NavLink,useNavigate} from 'react-router-dom';

const Navbar = () => {
    // const nav=useNavigate()
    // const logout=()=>{
    //     nav('home');
    // }
    // const goBack=()=>{
    //     nav(-1);
    // }
    const changeStyle=({isActive})=>{
        return{
        color:isActive?'red':'gray'
    
    }
    }
    return (
        <div className='ui inverted menu'>
            
            <NavLink to="insert"  className="item" style={{changeStyle}}>StudentLogin</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <NavLink to="Signup" className="item">Signup</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
             <NavLink to="Report" className="item">Report</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <NavLink to="Students" style={changeStyle}>Students</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  */}
            {/* <button onClick={logout}>logout</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            {/* <button onClick={goBack}>GoBack</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <NavLink to="Edit" className="item">Update</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="Update" className="item">Edit</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="Delete" className="item">Delete</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <NavLink to="Upload" className="item">Upload</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="img" className="item">img_upload</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="valid" className="item">Login</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        </div>
    );
};
export default Navbar;