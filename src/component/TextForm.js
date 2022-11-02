import React,{useState} from 'react';

export default function TextForm(props){
    const handleUpClicked=()=>{
            // console.log("Uppercase Clicked " +text);
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert(" Change to uppercase",'Success');
    }
    const handleOnChange=(event)=>{
        // console.log("Handling On Change");
        setText(event.target.value);
    }
    const handleDownClicked= ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert(" Change to Lowercase",'Success');
    }

    const[text,setText]=useState("Enter Text Here");

return(
<>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
<h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control my-3" style={{backgroundColor: props.mode==='dark'?'grey':'white', 
  color:props.mode==='dark'?'white':'black'}}value={text} onChange={handleOnChange} 
  id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn btn-primary mx-4" onClick={handleUpClicked}>ToUppercase</button>
  <button className="btn btn-primary" onClick={handleDownClicked}>ToLowercase</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} minutes taken to read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
</div>
</>
);
}