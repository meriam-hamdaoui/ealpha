import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import MyLessons from "./views/MyLessons";

const App = () => {
  return (
    <div className="App">
      <h1>Hello eAlpha</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="lessons" element={<MyLessons />} />
      </Routes>
    </div>
  );
};

export default App;
