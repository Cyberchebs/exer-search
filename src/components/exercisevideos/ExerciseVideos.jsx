import React from "react";
import "./exercisevideos.css";
import Loader from "../loader/loader";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div>
      <h3>
        watch <span style={{ color: "#ff2625" }}>{name}</span> exercise videos
      </h3>
      <div className="exercise_videos-box">
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise_videos"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div className="exercise_videos-text">
              <h5>{item.video.title}</h5>
              <p>{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
