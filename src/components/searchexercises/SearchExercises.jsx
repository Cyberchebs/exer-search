import { useState, useEffect, useContext } from "react";
import "./searchexercises.css";
import HorizontalScrollbar from "../horizontalscrollbar/HorizontalScrollbar";
import { fetchData, ExerciseOptions } from "../../api/fetch";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
        ExerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises?limit=1100`,
        ExerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        exercise =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <div className="search">
      <h2>Exercises you should try out</h2>
      <div className="search-engine">
        <input
          type="text"
          className="city-search"
          placeholder="search exercise"
          value={search}
          onChange={e => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <HorizontalScrollbar
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </div>
  );
};

export default SearchExercises;
