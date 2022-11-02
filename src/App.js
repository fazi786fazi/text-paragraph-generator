
import './App.css';
import Header from './component/Header';
import TextForm from './component/TextForm';
import React, {useState} from "react";
import Alert from './component/Alert';
import Gallary from './component/Gallary';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  // const [mode, setmode] = useState('dark');
  // let tomode =()=>{
  //   if(mode==='dark'){
  //     setmode('primary');
  //   }
  //   else{
  //     setmode('dark');
  //   }

  // }
  const [alert, setAlert] = useState("null");
  const showAlert= (message, type)=>{
   setAlert( {
    msg: message,
    typ: type 
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);

  }


  
  return (
   <>
   {/* <Header home="NEWS" about="Gallary" Mode={mode} tomode={tomode} /> */}
   

   {/* <Header/> */}
   
   <Router>
   <Header home="NEWS" about="Gallary" />
   <Alert alert={alert} />

   <div className="container">
      <Routes>
          
        {/* <Route exact path="/">
        <TextForm title="please add text which you want chnaging" org="orginal" showAlert={showAlert} />
          </Route>
          <Route exact path="/Gallary" element={<Gallary />} /> */}
          <Route exact path="/" element={<TextForm title="please add text which you want chnaging" org="orginal" showAlert={showAlert} /> } />
        <Route exact path="/gallary" element={<Gallary />} />
        <Route exact path="/news" element={<News />} />
         
        </Routes>
    </div>
    </Router>
   
   
   
  
   
   
   
   </>
   
  );
}

export default App;
