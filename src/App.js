import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; // Ensure TextForm is imported correctly
import React, { useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
    const [greenmode, setGreenMode] = useState('greenlight');
    const [alert, setAlert] = useState(null); // Alert state //Alert no one of object create kariye chiye //setalert usestate ander value set karshe

    // Function to show alert
    //message leshe type of alert leshe //showalert function help karshe alert message ne
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        // Clear the alert after 1.5 seconds
        // Optional: Clear the alert after a few seconds
        setTimeout(() => {
            setAlert(null);
        }, 1500); // Adjust duration as needed
    };

    // Function to toggle between light and dark mode
    const toToggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark Mode Has Been Enabled", "success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode Has Been Enabled", "success");
        }
    };

    // Function to toggle between green light and dark green mode
    const toGreenToggleMode = () => {
        if (greenmode === 'greenlight') {
            setGreenMode('darkgreen');
            document.body.style.backgroundColor = 'darkgreen';
            showAlert("Dark Green Mode Has Been Enabled", "success");
        } else {
            setGreenMode('greenlight');
            document.body.style.backgroundColor = 'lightgreen';
            showAlert("Light Green Mode Has Been Enabled", "success");
        }
    };

    return (
        <>  
            
                {/* /users --> Components 1 */}
                {/* /users/home --> Components 2 */}
                {/* Navbar with props passed */}
                <Navbar 
                    title="ReactJS Demo" 
                    aboutText="About Us" 
                    mode={mode} 
                    greenmode={greenmode} 
                    toToggleMode={toToggleMode} 
                    toGreenToggleMode={toGreenToggleMode} 
                />
                
                {/* Alert component */}
                <Alert alert={alert} />
                
                {/* Main container */}
                <div className="container my-3">
                   
                    <TextForm 
                        showAlert={showAlert} 
                        heading="Enter The Text to Analyze Below :-" 
                        mode={mode} 
                        greenmode={greenmode} 
                    />
                </div>
          
        </>
    );
}

export default App;
