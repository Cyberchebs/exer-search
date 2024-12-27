import React from "react";
import { Link } from "react-router-dom";
import "./exercisecard.css";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div>
        <button className="button-part">{exercise.bodyPart}</button>
        <button className="button-target">{exercise.target}</button>
      </div>
      <p className="exercise-card_name">{exercise.name}</p>
    </Link>
  );
};

export default ExerciseCard;
