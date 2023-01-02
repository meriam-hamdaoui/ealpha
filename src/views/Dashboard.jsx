import React from "react";
import LessonCard from "../components/cards/LessonCard";
import "../assets/css/Dashboard.css";

const Dashboard = () => {
  return (
    <div style={{ marginTop: "125px" }}>
      <div>
        <h2>Dashboard</h2>
      </div>
      <section className="lesson-container">
        <LessonCard />
      </section>
    </div>
  );
};

export default Dashboard;
