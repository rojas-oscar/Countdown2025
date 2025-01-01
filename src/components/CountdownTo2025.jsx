import React, { useEffect, useState } from 'react';
import './../styles/CountdownTo2025.css';

const CountdownTo2025 = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isNewYear, setIsNewYear] = useState(false);
  const [isEndOfYear, setIsEndOfYear] = useState(false);

  function calculateTimeLeft() {
    const now = new Date();
    const targetDate = new Date('2025-01-01T00:00:00');
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    if (!timeLeft) {
      if (!isNewYear) {
        setIsNewYear(true);
      } else if (!isEndOfYear) {
        setIsEndOfYear(true);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isNewYear, isEndOfYear]);

  return (
    <div className="countdown-container">
      {isEndOfYear ? (
        <div className="end-of-year">
          <h1>The countdown to 2025 has begun</h1>
          <p>"STAY HARD! The grind doesn't stop. Keep pushing."</p>
          <p className="note">No excuses. The clock is ticking. This is the beginning of something bigger.</p>
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
        </div>
      ) : isNewYear ? (
        <div className="new-year">
          <h1>Welcome to 2025!</h1>
          <p>"The grind doesn’t stop. Stay hard. No excuses!"</p>
          <p className="note">The battle starts NOW. Every second counts. There is no time to waste.</p>
          <div className="confetti"></div>
        </div>
      ) : (
        <div className="countdown">
          <h1 className='message'>Countdown to the fucking 2025</h1>
          <p className="message">"The clock is ticking. Stay hard!"</p>
          <p className="note message">The grind is real. The pain is inevitable. The victory is earned.</p>
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
        </div>
      )}
    </div>
  );
};

export default CountdownTo2025;
