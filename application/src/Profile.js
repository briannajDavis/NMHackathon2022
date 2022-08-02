
import "./Profile.css";
import {Link} from "react-router-dom";

function Profile() {
  //   const [visible, setVisible] = useState(0);
  return (
    <div className="scope">
        <div id="controls">
        <Link id="home" to="/">
          Name we dont have yet
        </Link>
        <button
          id="redoSurvey"
        >
          Retake Survey
        </button>
      </div>
        <div className="page">

      <div id="personalInfo">
        <h1>First Last</h1>
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
