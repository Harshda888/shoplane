import React from "react";
import Star from "./Star";
import { BsHeartFill } from "react-icons/bs";
import "./Category.css";
import { Link } from "react-router-dom";

function Category(props) {
  const { id, title, image, rating, price } = props.data;

  return (
    <div className="col-sm-3">
      <Link className="cardlink" to={"/product/detail/" + id}></Link>
      <div className="card text-center">
        <h1 className="col-md-4 ml-auto heart">
          {" "}
          <BsHeartFill />
        </h1>
        <img src={image} className="card-img-top" alt="..." />
        <div class="card-body">
          <h6 className="card-title">{title}</h6>
          <h3>${price}</h3>
          <p className="card-text">
            <Star stars={rating.rate} reviews={rating.count} />
          </p>
          <Link
            to={"/product/detail/" + id}
            className="btn btn-primary btn-block"
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
