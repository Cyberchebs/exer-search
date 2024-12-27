import React from "react";
import "./detail.css";

import bodyImage from "../../assets/5634619461681705499-128.png";
import armimage from "../../assets/8695750321642747183-128.png";
import equip from "../../assets/16187841681642998740-128.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: bodyImage,
      name: bodyPart,
    },
    {
      icon: equip,
      name: target,
    },
    {
      icon: armimage,
      name: equipment,
    },
  ];
  return (
    <div className="detail_box">
      <img src={gifUrl} alt={name} loading="lazy" className="box-img" />
      <div className="detail_box-info">
        <h3>{name}</h3>
        <p>
          Exercises keep you strong. {name} is an exercise to target your{" "}
          {target}. it will help you improve physique and gain energy
        </p>
        {extraDetail.map(item => (
          <div key={item.name} className="detail_box-infoII">
            <button>
              <img src={item.icon} />
            </button>
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
