import React from "react";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import JeweleryList from "../components/JeweleryList";

function JeweleryPage() {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <JeweleryList/>
    </div>
  );
}

export default JeweleryPage;