import { useRef, useEffect, useContext } from "react";
import "./horizontalScrollbar.css";
import BodyParts from "../bodyparts/BodyParts";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleWheel = e => {
      if (scrollRef.current) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          scrollRef.current.scrollLeft += e.deltaY;
        }
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="scroll-container" ref={scrollRef}>
      {data.map(item => (
        <div key={item.id || item} className="scroll-item">
          <BodyParts
            item={item}
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
