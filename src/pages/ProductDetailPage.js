import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import { useParams } from "react-router-dom";
 import { useDispatch } from "react-redux";
 import { addToCart } from "../redux/actions/cart-actions"; 
 import { deleteFromCart } from "../redux/actions/cart-actions";
 import { getNumberFromCart } from "../redux/actions/cart-actions";


 const ProductDetailPage = () => {
    const dispatch = useDispatch();
   const {id} = useParams();
   const [product, setProduct] = useState({});

  const fetchData = () => {
    axios
       .get(Endpoints.PRODUCT_BY_ID_URL + id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

   const onClickHandler = () => {
     dispatch(addToCart( product ))
  
   }
   
   const onChange = () =>{
    dispatch(deleteFromCart(product))
   }

   const onClic = () =>{
    dispatch(getNumberFromCart(product))
   }

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">
              <img
                src={ product.image}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2>{product.title}</h2>
              <h5>{ product.description}</h5>
              
              
              <h3>
                <span>${product.price}</span>

                <span
                  style={{
                    fontSize: "22px",
                    marginLeft: "10px",
                    color: "#888",
                  }}
                ></span>
              </h3>
              <button onClick={ onClickHandler } className="btn btn-primary">
                Add To Cart
              </button>
              <button onClick={ onChange } className="btn btn-primary">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
                }
export default ProductDetailPage;
