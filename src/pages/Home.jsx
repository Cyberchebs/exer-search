import SearchExercises from "../components/searchexercises/SearchExercises";
import Exercises from "../components/exercises/Exercises";
import { useState } from "react";
import Banner from "../components/banner/Banner";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <div>
      <Banner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;
