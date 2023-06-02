import React from "react";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import WomensClothingList from "../components/WomensClothingList";

function WomensClothingPage() {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <WomensClothingList/>
    </div>
  );
}

export default WomensClothingPage;