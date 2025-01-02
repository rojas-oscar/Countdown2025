import React, { useEffect, useState } from "react";
import "./../styles/CountdownTo2025.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(new Date().getFullYear()));
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  function calculateTimeLeft(year) {
    const now = new Date();
    const startOfNextYear = new Date(year + 1, 0, 1); // January 1st of next year
    const startOfCurrentYear = new Date(year, 0, 1);
    const difference = startOfNextYear - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      elapsedDays: Math.floor((now - startOfCurrentYear) / (1000 * 60 * 60 * 24)), // Days since Jan 1st
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(currentYear);
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days <= 0 &&
        newTimeLeft.hours <= 0 &&
        newTimeLeft.minutes <= 0 &&
        newTimeLeft.seconds <= 0
      ) {
        setCurrentYear((prevYear) => prevYear + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentYear]);

  return (
    <div className="countdown-container">
      <h1>Countdown to {currentYear + 1}</h1>
      <div className="time">
        <div className="unit">
          <span>{timeLeft.days}</span>
          <label>Days</label>
        </div>
        <div className="unit">
          <span>{timeLeft.hours}</span>
          <label>Hours</label>
        </div>
        <div className="unit">
          <span>{timeLeft.minutes}</span>
          <label>Minutes</label>
        </div>
        <div className="unit">
          <span>{timeLeft.seconds}</span>
          <label>Seconds</label>
        </div>
      </div>
      <div className="elapsed-time">
        <span>
          <span className="new-year">{timeLeft.elapsedDays}</span> Days,
          <span className="new-year">{timeLeft.hours}</span> Hours, <span className="new-year">{timeLeft.minutes}</span> Minutes, and <span className="new-year">{timeLeft.seconds}</span> Seconds have elapsed since the beginning of <span className="new-year">{currentYear}</span>.
        </span>
      </div>
    </div>
  );
};

export default Countdown;