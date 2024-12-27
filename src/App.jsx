import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import ExersiceDetail from "./pages/ExersiceDetail.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExersiceDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
