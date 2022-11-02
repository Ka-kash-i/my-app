// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar.js';
import TextForm from './component/TextForm.js';
import Alert from './component/Alert.js';

function App() {
 const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
     document.body.style.backgroundColor='white';
    }
  }
  const [alert, setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert();
    },1500);
  }

  return(
    <>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="AboutText"/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <TextForm showAlert={showAlert} heading="Heading of the website" mode={mode}/>
     {/* <About/> */}
     </div>
     </>
  );
}

export default App;
