import { useSelector } from "react-redux";
import "./Navbar1.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Navbar1() {
  // const { numberCart, Carts } = useSelector((state) => state.cartReducers);
  const state = useSelector((state) => state);
   const { numberCart, Carts } = state
  console.log(numberCart, Carts);

  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }, [loginStatus]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setLoginStatus(false);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg- me-1">
      <Link className="navbar-brand" to="/">
        {" "}
        <h1>
          <span style={{ color: "aqua" }}>SHOP</span>
          <span color="black">LANE</span>
        </h1>
      </Link>
      <div className="form-inline ml-auto ">
        <Link className= "btn btn-secondary ">
          Cart
          <span className="badge badge-light">{numberCart}</span>
        </Link>
        


        {loginStatus ? (
          <Link onClick={onLogoutHandler} className="btn btn-secondary" >
            Logout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar1;



// <div> 
//      <h1><span style={{color:'aqua'}}>SHOP</span><span color='blackn'>LANE</span></h1>

//  <div className="buttons">
//     <a href="" className="btn btn-outline-dark">
//         <i className="fa fa-sign-in me-1">Login</i>
//     </a>

//     <a href="" className="btn btn-outline-dark ms-2">
//         <i className="fa fa-user-plus me-1">Register</i>
//     </a>

//    <a href="" className="btn btn-outline-dark">         <i className="fa fa-shopping-cart me-1">Cart(0)</i>
//      </a>

//  </div>

//  </div> 
