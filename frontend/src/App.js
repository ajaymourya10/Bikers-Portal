import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import Header from "./component/menu/Header";
import Contact from "./component/Contact";
import Services from "./component/Services";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
      </Routes>
    </>
  );
}

export default App;
