import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
// import HomePage from "./pages/HomePage";
// import ElectronicsPage from "./pages/ElectronicsPage";
// import JeweleryPage from "./pages/JeweleryPage";
// import MensClothingPage from "./pages/MensClothingPage";
// import WomensClothingPage from "./pages/WomensClothingPage";
import { Provider } from "react-redux";
import mystore from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
