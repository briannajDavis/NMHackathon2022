import "./Profile.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  console.log(location.state);
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
              <h4>Last, First</h4>
              <a href="google.com">email address</a>
            </div>
            <div className="match">
              <h4>Last, First</h4>
              <a href="google.com">email address</a>
            </div>
            <div className="match">
              <h4>Last, First</h4>
              <a href="google.com">email address</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
