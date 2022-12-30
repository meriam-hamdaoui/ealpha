import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import MyLessons from "./views/MyLessons";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="app-body">
      <Header />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="lessons" element={<MyLessons />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
