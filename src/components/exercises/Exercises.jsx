import { useState, useEffect } from "react";
import "./exercise.css";
import ExerciseCard from "../exerciseCard.jsx/ExerciseCard";
import { ExerciseOptions, fetchData } from "../../api/fetch";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [visibleExercises, setVisibleExercises] = useState(9);

  const loadMore = () => {
    setVisibleExercises(prevVisible => prevVisible + 15);
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises?limit=1100`,
          ExerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1100`,
          ExerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div className="container" id="exercise">
      <h2>Showing Results</h2>
      <div className="exercise-card__container">
        {exercises.slice(0, visibleExercises).map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className="button-box">
        {visibleExercises < exercises.length && (
          <button className="load-more-button" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Exercises;
