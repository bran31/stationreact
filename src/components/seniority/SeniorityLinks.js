import React from "react";
import { Link } from "react-router-dom";
import "./Seniority.css";

function SeniorityLinks() {
  return (
    <>
      <ul>
        <li>
          <Link to="/als">ALS</Link>
        </li>
        <li>
          <Link to="/bls">BLS</Link>
        </li>
        <li>
          <Link to="/officers">Officers</Link>
        </li>
        <li>
            <Link to="/add">Add a Member</Link>
        </li>
      </ul>
    </>
  );
}

export default SeniorityLinks;
