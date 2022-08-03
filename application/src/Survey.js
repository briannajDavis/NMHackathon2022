import React from "react";
import "./Survey.css";

function Survey() {
  const submitdata = () => {
    console.log("click");
  };
  //   const [visible, setVisible] = useState(0);
  return (
    <div className="view">
      <h1>Survey</h1>
      <div className="table">
        <div class="categories">
          <h4 >Category</h4>
          <h4 >Arts</h4>
          <h4 >Business</h4>
          <h4 >Computers</h4>
          <h4 >Games</h4>
          <h4 >Health</h4>
          <h4 >Home</h4>
          <h4 >Recreation</h4>
          <h4 >Science</h4>
          <h4 >Society</h4>
          <h4 >Sports</h4>
        </div>

        <div class="examples">
          <div class="column">Examples</div>
          <div class="column">Literature, Movies, TV, Music</div>
          <div class="column">Investing, Market, Real Estate</div>
          <div class="column">Hardware, Software, Internet</div>
          <div class="column">Video Games, Gambling</div>
          <div class="column">Fitness, Medicine, Nutrition</div>
          <div class="column">Family, Cooking, Gardening</div>
          <div class="column">Travel, Outdoors, Boating</div>
          <div class="column">Biology, Astronomy, Physics</div>
          <div class="column">Politics, Religion, Sociology</div>
          <div class="column">Baseball, Football, Basketball</div>
        </div>

        <div class="row">
          <div class="column">Maybe</div>
          <div class="column">
            <input type="radio" />
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
        </div>

        <div class="row">
          <div class="column">Yes</div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
        </div>

        <div class="row">
          <div class="column">No</div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
          <div class="column">
            <input type="radio"></input>
          </div>
        </div>
      </div>

      <button onClick={submitdata}>Submit</button>
    </div>
  );
}

export default Survey;
