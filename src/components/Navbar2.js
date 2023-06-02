import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link " to="/" fontSize="20px">
            <b>All</b>
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="/Electronics">
            <b>Electronics</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/jewelery">
            <b>Jewelery</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/mensclothing">
            <b>Men's Clothing</b>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link " to="/Womensclothing">
            <b>Women's Clothing</b>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar2;
