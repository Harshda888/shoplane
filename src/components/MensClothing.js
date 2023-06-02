import React from "react";
import Star from "./Star";
import {BsHeartFill } from "react-icons/bs";
import "./Category.css"

function MensClothing (props) {
  const { id, title, image, rating, price} = props.data;


  return (
    <div className="col-sm-3">
      <div className="card text-center">
    <h1 className="col-md-4 ml-auto heart" > <BsHeartFill/></h1>
        <img src ={image} className="card-img-top" alt="..." />
        <div class="card-body">
           <h6 className="card-title">{title}</h6> 
           <h3>${price}</h3>
          <p className="card-text">
     <Star stars = {rating.rate} reviews ={rating.count}/>
          </p>
          <a href="#" className="btn btn-primary btn-block">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            Add to cart
          </a>
        </div>
      </div>
      </div>
    
  )
  };


export default MensClothing;
