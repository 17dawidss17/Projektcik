import React from "react";
import useTimer from "../../hook/useTimer";
import "../MainSection.css";

export const FormatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
  return `${getHours}: ${getMinutes}:${getSeconds}`;
};

const Stoper = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleReset,
    handleResume,
  } = useTimer(0);
  return (
    <div className="main-container">
      <h3> Stoper </h3>
      <p> {FormatTime(timer)}</p>
      <div className="btn">
        {!isActive && !isPaused ? (
          <button onClick={handleStart}> Start </button>
        ) : isPaused ? (
          <button onClick={handlePause}>Stop</button>
        ) : (
          <button onClick={handleResume}> Sumuj </button>
        )}
        <button onClick={handleReset} disabled={!isActive}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stoper;
