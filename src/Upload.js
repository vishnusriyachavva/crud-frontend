import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Upload = () => {
    
    
    return (
        <div>
            
            
            <div className="ui centered card">
                <form className="ui form" method='POST' action="http://localhost:3001/upload" encType="multipart/form-data">
                    <center>
                        
                        
                    </center>

                    <div className="field">
                        
                        <input type="file" name="image" placeholder="upload your file" 
                         />
                    </div>
                    
        
                    <center>
                        <input  type="submit"/>
                        
                    </center>
                 
                </form>
            </div>
        </div>
    );
};

export default Upload;