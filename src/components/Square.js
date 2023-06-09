import React from "react";

const generateSquare = (n) => {
  let rows = [];
  for (let index = 0; index < n; index++) {
    rows.push([]);
    for (let i = 0; i < n; i++) {
      rows[index].push(
        <span
          style={{ "--i": (i + index) % 2 ? "1.5rem" : "-1.5rem" }}
          key={(index + 1) * i}
        ></span>
      );
    }
  }
  return (
    <>
      {rows.map((row, index) => (
        <div className="items" key={index}>
          {row.map((item) => item)}
        </div>
      ))}
    </>
  );
};

const Square = () => {
  return <div className="square">{generateSquare(8)}</div>;
};

export default Square;
