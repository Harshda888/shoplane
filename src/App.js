// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ElectronicsPage from "./pages/ElectronicsPage";
import JeweleryPage from "./pages/JeweleryPage";
import MensClothingPage from "./pages/MensClothingPage";
import WomensClothingPage from "./pages/WomensClothingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";



function App() {
  //   <BrowserRouter>
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all" element={<HomePage />} />
      {/* <Route path="/electronics" element={<ElectronicsPage />} /> */}
      <Route path="/jewelery" element={<JeweleryPage />} />
      <Route path="/electronics" element={<ElectronicsPage />} />
      <Route path="/mensclothing" element={<MensClothingPage />} />
      {/* <Route path="/womensclothing/:id" element={<WomensClothingPage />} /> */}
      <Route path="/womensclothing" element={<WomensClothingPage />} />
      <Route path="/product/detail/:id" element={<ProductDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
  //   </BrowserRouter>;
}

export default App;
