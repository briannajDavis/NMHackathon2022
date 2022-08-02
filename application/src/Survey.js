import { useState } from "react";
import React from 'react'
import "./Survey.css"

function Survey() {
  const submitdata = () =>{
    console.log("click");
  }
//   const [visible, setVisible] = useState(0);
  return (
    <div className="page">
      <h1>Survey</h1>
      
  <div class='row'>
    <div class='column'>
        Category
    </div>
    <div class='column'>
        Arts
    </div>
    <div class='column'>
        Business
    </div>
    <div class='column'>
        Computers
    </div>
    <div class='column'>
        Games
    </div>
    <div class='column'>
        Health
    </div>
    <div class='column'>
        Home
    </div>
    <div class='column'>
        Recreation
    </div>
    <div class='column'>
        Science
    </div>
    <div class='column'>
        Society
    </div>
    <div class='column'>
        Sports
    </div>
  </div>

  <div class='row'>
    <div class='column'>
        Examples
    </div>
    <div class='column'>
        Literature, Movies, TV, Music
    </div>
    <div class='column'>
        Investing, Market, Real Estate
    </div>
    <div class='column'>
        Hardware, Software, Internet
    </div>
    <div class='column'>
        Video Games, Gambling
    </div>
    <div class='column'>
        Fitness, Medicine, Nutrition
    </div>
    <div class='column'>
        Family, Cooking, Gardening
    </div>
    <div class='column'>
        Travel, Outdoors, Boating
    </div>
    <div class='column'>
        Biology, Astronomy, Physics
    </div>
    <div class='column'>
        Politics, Religion, Sociology
    </div>
    <div class='column'>
        Baseball, Football, Basketball
    </div>
  </div>
  

  <div class='row'>
    <div class='column'>
        Maybe
    </div>
    <div class='column'>
    <input type="radio" checked={false} />
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
  </div>

  <div class='row'>
    <div class='column'>
        Yes
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
  </div>

  <div class='row'>
    <div class='column'>
        No
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
    <div class='column'>
      <input type="radio"></input>
    </div>
  </div>

<button onClick={submitdata}>Submit</button>

    </div>
  );
}

export default Survey;
