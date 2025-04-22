import React from "react";

const Side = ({ quotes }) => {
  return (
    <div>
      {quotes.map((q) => (
        <p>
          <p>{q.quote}</p>
        </p>
      ))}
    </div>
  );
};

export default Side;
