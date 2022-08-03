import React from "react";
import "./Survey.css";
import { Link } from "react-router-dom";

function Survey() {
  
  return (
    <div className="view">
      <h1>Survey</h1>
      <div className="table">
        <div className="categories">
          <h4>Category</h4>
          <h4>Arts</h4>
          <h4>Business</h4>
          <h4>Computers</h4>
          <h4>Games</h4>
          <h4>Health</h4>
          <h4>Home</h4>
          <h4>Recreation</h4>
          <h4>Science</h4>
          <h4>Society</h4>
          <h4>Sports</h4>
        </div>
        <div id="examples">
          <h4>Examples</h4>
          <h5>Literature, Movies, TV, Music</h5>
          <h5>Investing, Market, Real Estate</h5>
          <h5>Hardware, Software, Internet</h5>
          <h5>Video Games, Gambling</h5>
          <h5>Fitness, Medicine, Nutrition</h5>
          <h5>Family, Cooking, Gardening</h5>
          <h5>Travel, Outdoors, Boating</h5>
          <h5>Biology, Astronomy, Physics</h5>
          <h5>Politics, Religion, Sociology</h5>
          <h5>Baseball, Football, Basketball</h5>
        </div>

        <div class="row">
          <h4>Yes</h4>
          <div className="radios">
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          </div>
        </div>

        <div class="row">
          <h4>Maybe</h4>
          <div className="radios">
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          </div>
        </div>

        <div class="row">
          <h4>No</h4>
          <div className="radios">
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          </div>
        </div>
      </div>

      <button id="submitButton">
      <Link className="links" to={{ pathname: "/myProfile"}}>
                Submit
              </Link>
      </button>
    </div>
  );
}

export default Survey;
