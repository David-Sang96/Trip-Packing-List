import React, { useState } from "react";

const DateApp = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("Jan 14 2024");
  date.setDate(date.getDate() + count);

  return (
    <div
      style={{
        width: "300px",
        margin: "auto",
      }}
    >
      <div style={{ display: "flex", marginBottom: 10 }}>
        <button onClick={() => setStep((prev) => prev - 1)}>-</button>
        <p>Step : {step}</p>
        <button onClick={() => setStep((prev) => prev + 1)}>+</button>
      </div>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <button
          onClick={() =>
            setCount((prev) => {
              if (step) {
                return prev - step;
              }
              return prev - 1;
            })
          }
        >
          -
        </button>
        <p>Count : {count}</p>
        <button
          onClick={() =>
            setCount((prev) => {
              if (step) {
                return prev + step;
              }
              return prev + 1;
            })
          }
        >
          +
        </button>
      </div>
      <p>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`}{" "}
        {date.toDateString()}{" "}
      </p>
    </div>
  );
};

export default DateApp;
