import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import File from './Head_files';
import '../styles/Component.css';
import About from './About'; 
import Projects from './Projects';
import Contacts from './Contacts';

function FileNav() {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const handleFileClick = (path) => {
    if (location.pathname === path) {
      navigate('/'); 
    } else {
      navigate(path); 
    }
  };

   return (
    <div className="file-wrapper d-flex justify-content-center">
      <File
        label="apie mane"
        color="#C9E8FF"
        isOpen={location.pathname === "/apie-mane"}
        onClick={() => handleFileClick("/apie-mane")}
        offset="10%"
      >
        <About />
      </File>

      <File
        label="projektai"
        color="#6666FF"
        isOpen={location.pathname === "/projektai"}
        onClick={() => handleFileClick("/projektai")}
        
      >
        <Projects />
      </File>

      <File
        label="kontaktai"
        color="#B8BAFF"
        isOpen={location.pathname === "/kontaktai"}
        onClick={() => handleFileClick("/kontaktai")}
        offset="70%"
      >
        <Contacts />
      </File>
    </div>
  );
}

export default FileNav;