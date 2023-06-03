import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";


const CategoryList = () => {
  
  const [categories, setCategories] = useState([]);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-50">
      <h3 className="text-center"></h3>
      <div className="row">
        {
        categories.map((category) => 
          <Category data={category} />
 )
        }
      </div>
    </div>
  );
};
export default CategoryList;
