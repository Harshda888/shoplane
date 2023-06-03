
import React from "react";
import Star from "./Star";
import { BsHeartFill } from "react-icons/bs";
import "./Category.css";
import { Link } from "react-router-dom";



function Category(props) {
  const { id, title, image, rating, price, category } = props.data;
   return (
    <div className="col-sm-3">
      <a className="cardlink" to={"/product/detail/" + id}></a>
      <div className="card text-center">
        <h1 className="col-md-4 ml-auto heart">
          {" "}
          <BsHeartFill />
        </h1>
        <img src={image} className="card-img-top" alt="..." width="100px" />
        <div class="card-body mt-10px">
          <h6 className="card-title mt-10px">{title}</h6>
          <h3>${price}</h3>
          <p className="card-text">
            <Star stars={rating.rate} reviews={rating.count} />
          </p>
          <Link
            to={"/product/detail/" + id}
            className="btn btn-primary btn-block mt-5px"
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
