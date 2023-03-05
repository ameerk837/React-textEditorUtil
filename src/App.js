import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [Mode, setMode]= useState('dark');
  const [alert,setAlert] = useState(null);

    const alertfun = (message,type)=>{
        setAlert({
            message:message,
            type:type
        })

        setTimeout(() => {
          setAlert(null);
        },1400);
    }
    
  const toggle = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      alertfun('Dark Mode Enabled!','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      alertfun('Light Mode Enabled!','success');
    }
  }

  const toggle1 = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0000CD';
      alertfun('Dark Mode Enabled!','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      alertfun('Light Mode Enabled!','success');
    }
  }

  const toggle2 = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#800000';
      alertfun('Dark Mode Enabled!','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      alertfun('Light Mode Enabled!','success');
    }
  }

  const toggle3 = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#8B4513';
      alertfun('Dark Mode Enabled!','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      alertfun('Light Mode Enabled!','success');
    }
  }
  return (
    <>
      <Navbar title='Text Editor' mode={Mode}  toggle={toggle} toggle1={toggle1} toggle2={toggle2} toggle3={toggle3}/>
      <Alert alert={alert}/>
      <TextForm mode={Mode}/>
    </>
  );
}

export default App;
