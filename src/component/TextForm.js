
import React, {useState} from "react";



export default function TextForm(props) {
  const Upclick =() =>{
    console.log("upclick");
    // settext("which you want text change kindly add here")
   
    let newtext = text.toUpperCase();
    settext(newtext);
   props.showAlert("covert to uppercase", "success")

  }
  const Loclick =() =>{
    console.log("loclick");
    // settext("which you want text change kindly add here")
   
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("covert to lowercase", "success")

  }
  const clclick =() =>{
    console.log("clclick");
    let newtext = '';
    settext(newtext);
    props.showAlert("your text is clear now", "success")

  }
  const lclick =() =>{
    console.log("lclick");
  let newtext = text.split(". ").join("\n");
   
    settext(newtext);
    props.showAlert("your text is line by line", "success")

  }
  const copyclick =() =>{
  //   console.log("copyclick");
  // let text = document.getElementById("mybox");
  // text.select();   
  //  navigator.clipboard.writeText(text.value);
  //   document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("now your text is copy", "success")

  }
  const srclick =() =>{
    console.log("srclick");
  let newtext = text.split(/[ ]+/).join(" ");
   
    settext(newtext);
    props.showAlert("extra space remove your text", "success")

  }
  
  const Upchange =(event) =>{
    console.log("upchange");
    settext(event.target.value)
  }
  
  const [mystyle, setMystyle] = useState({
    backgroundColor:'white',
   
   
  });
  let backremove=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  

   }
  const tostyle=()=>{
    backremove();
    if(mystyle.backgroundColor==='white'){
      setMystyle({
        backgroundColor:'#212529',
        color:'white',
      })
      document.body.style.backgroundColor='#212529';
      setBtn("Enable light mood")
      props.showAlert("Enable dark mood", "success")
    }
    else{
      setMystyle({
        backgroundColor:'white',
        
       
      })
      document.body.style.backgroundColor='white';
      setBtn("Enable dark mood")
      props.showAlert("Enable light mood", "success")

    }

  }
  const [btn, setBtn] = useState("Enable dark mood");
  const [text, settext] = useState("Enter text here.");
  // settext("which you want text change kindly add here ");
  return (
    <div style={mystyle} id="box" >
      <div className="mb-3">
       <h1>{props.title}</h1>
      
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          {props.org}
        </label>
        <div class="form-check form-switch">
               <input class="form-check-input" type="checkbox" onClick={tostyle}  id="flexSwitchCheckDefault"/>
               <label class="form-check-label" for="flexSwitchCheckDefault">{btn}</label>
       </div>
        <textarea
          className="form-control"
          id="mybox"
          rows="10"
          value={text}
          onChange={Upchange}
          style={mystyle}
        ></textarea>
        </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  id="bu" onClick={Upclick}> Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Loclick}>Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={clclick}> Clear</button>
      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={lclick}> Line by Line</button>
      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1 " onClick={copyclick}>Copy</button>
      <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={srclick}>Space remove</button>
      <p className="my-3"><b>Summary:</b> {text.split(/\s+/).filter((e1)=>{return e1.length!==0}).length} Words and {text.length} Characters </p>
      <p><b>NOTE:</b>This paragaph human read with in { 0.008 * text.split(" ").filter((e1)=>{return e1.length!==0}).length} </p>
      <h3>Preview</h3>
      <p>{text}</p>

      </div>
    </div >
  );
}
