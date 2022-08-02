import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'
function App() {
  const [visible, setVisible] = useState(0);
  return (
    <div className="App">
      {visible === 0 && (
        <div id="signIn">
          <h2>Welcome to A NAME WE HAVENT CHOSEN YET</h2>
          <h4>Sign in or sign up below</h4>
          <div id="buttons">
            <button onClick={() => setVisible(-1)}>Sign In</button>
            <button onClick={() => setVisible(1)}>Sign Up</button>
          </div>
        </div>
      )}
      {visible === -1 && (
        <div className="signOn">
          <button onClick={() => setVisible(0)}>Back</button>
          <input id="fName" type="text" placeholder="First Name"></input>
          <input id="lName" type="text" placeholder="Last Name"></input>
          <button>
            <Link className="links" to={{ pathname: "/myProfile"}}>
              Enter
            </Link>
          </button>
        </div>
      )}
      {visible === 1 && (
        <div className="signOn">
          <button onClick={() => setVisible(0)}>Back</button>
          <input id="fName" type="text" placeholder="First Name"></input>
          <input id="lName" type="text" placeholder="Last Name"></input>
          <button>
            <Link className="links" to={{ pathname: "/survey"}}>
              Enter
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
