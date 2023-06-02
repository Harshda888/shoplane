
import React, { useState, useEffect } from "react";
import axios from "axios";
import Elec from "./Elec";
import "./Category.css"
import Endpoints from "../api/Endpoints"

function ElectronicData() {
    const [electronics, setElectronics] = useState([]);
    const getData = () => {
        axios
          .get(Endpoints.CATEGORY_ELECTRONICS_URL)
          .then((response) => {
            console.log(response.data);
            setElectronics(response.data)
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
          <h1 className="text-center"></h1>
          <div className="row">
            {electronics.map((category) => 
              <Elec data={category} />
            )}
          </div>
        </div>
      );
    
}

export default ElectronicData