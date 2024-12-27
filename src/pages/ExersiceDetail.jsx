import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExerciseOptions, fetchData, youtubeOptions } from "../api/fetch";

import ExerciseVideos from "../components/exercisevideos/ExerciseVideos";
import Detail from "../components/detail/Detail";

const ExersiceDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
      const youTubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        ExerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        ExerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
    </div>
  );
};

export default ExersiceDetail;
