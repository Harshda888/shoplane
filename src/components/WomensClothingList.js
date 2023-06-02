import React, { useState, useEffect } from "react";
import axios from "axios";
import WomensClothing from "./WomensClothing";
import Endpoints from "../api/Endpoints";

const WomensClothingList = () => {
  
  const [womensClothing, setWomensClothing] = useState([]);

  const getData = () => {
    axios
      .get(Endpoints.CATEGORY_WOMENS_CLOTHING_URL)
      .then((response) => {
        console.log(response.data);
        setWomensClothing(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h3 className="text-center"></h3>
      <div className="row">
        {womensClothing.map((category) => 
          <WomensClothing data={category} />
        )}
      </div>
    </div>
  );
};
export default WomensClothingList;

