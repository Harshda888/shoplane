import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import Product from "./Product";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const {id}= useParams()
  const [products, setProducts] = useState([]);

  const getData = () => {
    axios
      .get(Endpoints.PRODUCT_BY_CATID_URL + id)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [ id ])

  return (
    <div>
      <h2 className="text-center">All Products</h2>
      <div class="row">
        {
            products.map((product) => <Product data={ product }  /> )
        }
      </div>
    </div>
  );
};
export default ProductList;
