// import react router dom and components //
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import LoginPage from "./components/LoginPage";
import TotalPrice from "./components/TotalPrice";
import NavMenu from "./components/NavMenu";
import "./App.css";

// Create the App component //
function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <header className="App-header"></header>
      <NavMenu />
      {/* Create Routes to navigate the multipage web application from current location */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/Products"
          element={<Products total={total} changeTotal={setTotal} />}
        />
        <Route
          path="/About"
          element={<About total={total} changeTotal={setTotal} />}
        />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/TotalPrice" element={<TotalPrice />} />
      </Routes>
    </div>
  );
}

export default App;
