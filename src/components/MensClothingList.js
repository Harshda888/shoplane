import React, { useState, useEffect } from "react";
import axios from "axios";
import MensClothing from "./MensClothing";
import Endpoints from "../api/Endpoints"

const MensClothingList = () => {
  
  const [mensClothing, setMensClothing] = useState([]);

  const getData = () => {
    axios
      .get(Endpoints.CATEGORY_MENS_CLOTHING_URL)
      .then((response) => {
        console.log(response.data);
        setMensClothing(response.data)
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
        {mensClothing.map((category) => 
          <MensClothing data={category} />
        )}
      </div>
    </div>
  );
};
export default MensClothingList;
