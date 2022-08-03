import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
function App() {
  let fullName = "";
  const [visible, setVisible] = useState(0);
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  }
  return (
    <div className="App" >
      {visible === 0 && (
        <div id="welcome">
          <h1 id="welcomeMessage">Welcome to NM Lunch Meet</h1>
          <h4 className="purpose">
            Have lunch with like minded individuals, across departments.
            <br></br>Meet new people, explore NM.
          </h4>
          <div className="buttons">
            <button onClick={() => setVisible(-1)}>Sign In</button>
            <button onClick={() => setVisible(1)}>Sign Up</button>
          </div>
        </div>
      )}
      {visible === -1 && (
        <div className="signOn">
          <h4>Sign in to view your matches</h4>
          <input className="fName" type="text" placeholder="First and Last name" onChange={handleName}></input>
          <div className="buttons">
            <button onClick={() => setVisible(0)}>Back</button>
            <button onClick={setName}>
              <Link className="links" to={{ pathname: "/myProfile", state: { name }}} onClick={setName}>
                Enter
              </Link>
            </button>
          </div>
        </div>
      )}
      {visible === 1 && (
        <div className="signOn">
          <h4>Sign up to begin</h4>
          <input className="fName" type="text" placeholder="First and Last name" onChange={handleName}></input>
          <div className="buttons">
            <button onClick={() => setVisible(0)}>Back</button>
            <button onClick={setName}>
              <Link className="links" to={{ pathname: "/survey", state: { fullName } }} onClick={setName}>
                Enter
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
