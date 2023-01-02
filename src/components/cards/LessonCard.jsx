import React from "react";
import { lessons } from "../../constant/dashboard";
import { Card, Button } from "react-bootstrap";

const LessonCard = () => {
  return (
    <>
      {lessons.map((el, index) => (
        <Card className="lesson-card" key={index}>
          <Card.Title className="lesson-card-title">{el.title}</Card.Title>
          <Button
            className="lesson-card-button"
            onClick={() => console.log(el.title)}
          >
            {el.icon}
          </Button>
          <Card.Text className="lesson-card-text">{el.content}</Card.Text>
        </Card>
      ))}
    </>
  );
};

export default LessonCard;
