import React from "react";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import CategoryList from "../components/CategoryList";

function HomePage() {
  return (
    <div>
      {/* <h1>home page</h1> */}
      <Navbar1 />
      <Navbar2 />
      <CategoryList />
    </div>
  );
}

export default HomePage;
