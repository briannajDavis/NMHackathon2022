import { useState } from "react";
import "./Profile.css";
import React from 'react'

function Profile() {
//   const [visible, setVisible] = useState(0);
  return (
    <div className="page">
      <div id="personalInfo">
        <h1>Me</h1>
      </div>
      <div>
        <h1 id="title">Matches</h1>
        <div className="matches">
            <div className="match">Match One</div>
            <div className="match">Match Two</div>
            <div className="match">Match Three</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
