import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Delete from './Delete.js';
import Update from './Update.js';
import Upload from "./Upload.js"

import Login from './Login.js'

import Navbar from './Navbar.js';
import Report from './Report.js';

import Signup from './Signup';
import Edit from './Edit.js';
import Img_upload from './Img_upload.js';
import Login_Validation from './Login_Validation.js';


const App = () => {
    return (
        <div >
            <Navbar />
            <Routes>
                
                
                <Route path= "insert" element={ <Login />}/>
                <Route path= "Signup" element={ <Signup />}/>
                <Route path= "valid/Signup" element={ <Signup />}/>
                {/* <Route path= "Department" element={ <Department />}/>
                <Route path= "Students" element={ <StudentList />}>
                    <Route path=":name" element={<StudentParams/>}/>
                </Route> */} 
                <Route path= "Report" element={ <Report />}/>
                <Route path= "Upload" element={ <Upload />}/>
                <Route path= "Report/Report" element={ <Report />}/>
                <Route path= "Edit" element={ <Update />}/>
                <Route path= "Update" element={ <Edit />}/>
                <Route path= "Delete" element={ <Delete />}/>
                <Route path= "img" element={ <Img_upload />}/>
                <Route path= "valid" element={ <Login_Validation />}/>
            </Routes>
        </div>
    );
};

export default App;