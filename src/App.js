import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashRouter } from "react-router-dom";



function QuoteText(text){
  console.log(text.quoteTxt.quote)
    return (
      <>
      <h1 id="text" className='easeTransition'>{text.quoteTxt.quote ? text.quoteTxt.quote : "There are two types of courage involved with what I did. When it comes to picking up a rifle, millions of people are capable of doing that, as we see in Iraq or Vietnam. But when it comes to risking their careers, or risking being invited to lunch by the establishment, it turns out that's remarkably rare."}</h1>
      <p id='author' className='easeTransition'>-{text.quoteTxt.author ? text.quoteTxt.author : 'Daniel Ellsberg'}</p>
      </>
    )
}
// ff5733
function QuoteBox(){
  const [txt,setTxt] = useState([]);
  const [color,setColor] = useState('#f6cc25');
  // useEffect(()=>{
  //   console.log(txt)
  // },[txt]
  // );
  function randomColorGenerator(){
    let possibleHexValues = '0123456789ABCDEF'
    possibleHexValues = possibleHexValues.split('')
    let resultHex ='#'
    while(resultHex.length !== 7){
      resultHex += possibleHexValues[Math.floor(Math.random()*16)]
    }
    return resultHex;
  };
  function handleClick(){
     randomColorGenerator();
     fetch('https://api.api-ninjas.com/v1/quotes?category=courage',{
      headers:{'X-Api-Key': 'd6V6HLl5OJ4lWGbv0CjvYg==R05SH46caDVwvyNB'}
    })
    .then(response => response.json())
    .then((data) => {
      const newColor = randomColorGenerator();
      setTxt(data[0]);
      setColor(newColor);
    });
  }
  useEffect(()=>{
    let root = document.documentElement;
    root.style.setProperty('--color-general',color)
  },[color]
  );

// className='easeTransition'
  return(
  <div id="quote-box">
    <QuoteText quoteTxt={txt}/>
    <div className='buttons'>
    <div className='links'>    
    <a href="twitter.com/intent/tweet" id="tweet-quote" className='twitter easeTransition new'>Twitter</a>
    <a href="twitter.com/intent/tweet" className='tumblr easeTransition new'>Tumblr</a>
    </div>
    <button id="new-quote" className='new easeTransition' onClick={handleClick}>New quote</button>
    </div>
  </div>)
}


function App() {
  return (
    <HashRouter base='/'>
    <div className="App easeTransition">
      <QuoteBox />
    </div>
    </HashRouter>
  );
}

export default App;
