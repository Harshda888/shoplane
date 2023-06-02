import React, { useState, useEffect } from "react";
import axios from "axios";
import Jewelery from "./Jewelery";
import Endpoints from "../api/Endpoints"

const JeweleryList = () => {
  
  const [jewelery, setJewelery] = useState([]);

  const getData = () => {
    axios
      .get(Endpoints.CATEGORY_JEWELERY_URL)
      .then((response) => {
        console.log(response.data);
        setJewelery(response.data)
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
        {jewelery.map((category) => 
          <Jewelery data={category} />
        )}
      </div>
    </div>
  );
};
export default JeweleryList;
