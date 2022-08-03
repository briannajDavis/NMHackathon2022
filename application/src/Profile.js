import "./Profile.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  // console.log(location.state);
  let fullName = location.state;
  console.log(fullName);
  return (
    <div className="scope">
      <div id="controls">
        <Link id="home" to="/">
          Lunch Meet
        </Link>
        <button id="redoSurvey">
          <Link className="links" to={{ pathname: "/survey" }}>
            Retake Survey
          </Link>
        </button>
      </div>
      <div className="page">
        <div id="personalInfo">
          <h3>
            Brianna<br></br>Davis
          </h3>
        </div>
        <div className="content">
          <h1 id="title">Matches</h1>
          <div className="matches">
            <div className="match">
              <h4>Stoia, Nick</h4>
              <div className="lunchB">
                <button>Set up lunch</button>
              </div>
            </div>
            <div className="match">
              <h4>Robbins, Donny</h4>
              <div className="lunchB">
                <button>Set up lunch</button>
              </div>
            </div>
            <div className="match">
              <h4>Bergs, Teddy</h4>
              <div className="lunchB">
                <button>Set up lunch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
