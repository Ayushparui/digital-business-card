import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info"
import Content from "./components/Content"
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

ReactDOM.render(
  <div className="main">
    <Info />
    <Content />
    <Footer />
  </div>
  ,document.getElementById("root"))
