import React, { useState } from "react";
import { ReadMoreDetail } from "../styles/DetailPageStyle";

export const ReadMore = ({ children }) => {
  const text = children;

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p>
      {isReadMore ? text.slice(0, 1) : text}
      <ReadMoreDetail onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Leer más" : " Mostrar menos"}
      </ReadMoreDetail>
    </p>
  );
};
  