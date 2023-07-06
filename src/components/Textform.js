import React,{useState} from 'react';
import PropTypes from 'prop-types';


export default function Textform(props) {
    const [text,setState]=useState("");

    const toUpperCase=()=>{
        let newState=text.toUpperCase();
        setState(newState);
    }
    const toLowerCase=()=>{
        let newState=text.toLowerCase();
        setState(newState);
    }
    const toSpeak=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }

    const toClear=()=>{
        let text="";
        setState(text);
    }

    const toChange=(event)=>{
        setState(event.target.value);
    }

    let back={
        backgroundColor:"#969191"
    }

    let countWord=()=>{
        let y=text.split(/\s+/);
        let count=0;
        for (let i = 0; i < y.length; i++) {
            if(y[i]!==""){
                count++;
            }
        }
        return(count);
    }

    return (
        <>
            <div className="container mb-3">
                <h1 className="m-3">{props.title}</h1>
                <textarea className="form-control" rows="8" value={text} onChange={toChange} style={back}></textarea>
                <button disabled={text.length===0} type="button" className="btn btn-secondary m-2" onClick={toUpperCase}>Upper</button>
                <button disabled={text.length===0} type="button" className="btn btn-secondary m-2" onClick={toLowerCase}>Lower</button>
                <button disabled={text.length===0} type="button" className="btn btn-secondary m-2" onClick={toSpeak}>Speak</button>
                <button disabled={text.length===0} type="button" className="btn btn-secondary m-2" onClick={toClear}>Clear</button>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{`${countWord()} words and ${text.length} characters`}</p>
                <p>{text.length===0?"0 minutes to read the text.":0.008*text.split(" ").length+" minutes to read the text."}</p>
                <h2>Preview</h2>
                <div>
                <p id="preview">{text.length===0?"Nothing to preview":text}</p>
                </div>
            </div>
        </>
    )
}

Textform.propTypes={
    title:PropTypes.string
}

Textform.defaultProps={
    title:"Enter here..."
}
