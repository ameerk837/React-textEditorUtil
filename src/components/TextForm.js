import React, {useState} from "react"

export default function TextForm(props) {

    const [text, setText] = useState('');
  
    const handleclick = ()=>{
        setText('you have clicked on the button')
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handlep =(event)=>{
        console.log('change');
        setText(event.target.value)
    }

    const downloadTxtFile = () => {
      const element = document.createElement("a");
      const file = new Blob([text], {
        type: "text/plain"
      });
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      element.click();
    }

    const whiteSpace = () => {
      let newText = text.replace(/\s+/g, ' ').trim();
      setText(newText);
   }

   const capital = ()=>{
    let newText = '';
    text.split(' ').forEach((element)=>{
      let capital = element[0].toUpperCase() + element.substring(1) + " ";
      newText += capital;
    });
    setText(newText);
  }

    const clearText =()=>{
        let clear='';
        setText(clear)
    }

    return (
        <>
      <div className="container" style={{color: props.mode==='light'?'grey':'light',backgroundColor: props.mode==='light'?'dark':'light'}}>
        <div className="mb-3" style={{color: 'grey'}}>
          <h1 className="form-label" style={{color: props.mode==='light'?'dark':'light'}}>
            Text here
          </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handlep}
            id="exampleFormControlTextarea1"
            rows="10" 
            style={{backgroundColor: props.mode==='light'?'grey':'light', color:props.mode==='light'?'dark':'light'}}
          ></textarea>
        </div>

        <button className="btn-primary mx-1" onClick={handleclick}>Uppercase</button>
        <button className="btn-secondary mx-1" onClick={capital}>Capitalize</button>
        <button className="btn-secondary mx-1" onClick={downloadTxtFile}>Download File</button>
        <button className="btn-secondary mx-1" onClick={whiteSpace}>White space</button>
        <button className="btn-secondary mx-1" onClick={clearText}>Clear</button>

        <div className="container2" style={{color: 'grey'}}>
          <p>there are {text.split(" ").filter((e)=>{return e.length!=0}).length} words and {text.length} characters</p>
        </div>
      </div>
    </>
  );
}
