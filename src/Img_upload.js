import React, { useState } from 'react';
import axios from 'axios';
const Img_upload = () => {
    const [imgfile, Setimgfile] = useState({
        file : [],
        filepreview : null,
    });
    const [stid, setstid] = useState('');
    const selectfile=(e)=>{
        Setimgfile({
            ...imgfile,
            file: e.target.files[0],
            filepreview : URL.createObjectURL(e.target.files[0])
        });
    }
    
    const upload = async()=>{
        const formdata = new FormData();
        formdata.append('avatar', imgfile.file);
        formdata.append('originalname', imgfile.originalname);
        axios.post('http://localhost:8080/fileupload',formdata,{
            headers : {"Content-Type" : "multipart/form-data"}
        }).then(res=>{
            console.log(res);
            
        })

    }   
    return (
        <div>
          <input type="text" name="stid" onChange={(e)=>{
               setstid(e.target.value)
         }}/><br></br><br></br>
            <input type="file" onChange = {selectfile} />
            <br /><br />
            <button onClick={upload}>UPLOAD</button><br/><br/>
            {imgfile.filepreview !== null ?
            <img src = {imgfile.filepreview} width = '350px' height = "300px"
        alt = 'upload image'/> :null}
        </div>
        
    );
};

export default Img_upload;