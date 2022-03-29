import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/organisms/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Experience from "./components/pages/Experience/Experience";
import Awards from "./components/pages/Awards/Awards";
import Skills from "./components/pages/Skills/Skills";
import Interest from "./components/pages/Interest/Interest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/interest" element={<Interest />} />
        </Routes>
      </div>
    );
  }
}

export default App;
