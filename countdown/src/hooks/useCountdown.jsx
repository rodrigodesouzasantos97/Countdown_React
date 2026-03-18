import { useState, useEffect, useRef } from "react";

const useCountdown = (date) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [countdownIsOver, setCountdownIsOver] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    const countdown = () => {
      const countDate = new Date(date).getTime();
      const now = new Date().getTime();
      const interval = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      if (interval <= 0) {
        clearInterval(intervalRef.current);

        setDay(0);
        setHour(0);
        setMinute(0);
        setSecond(0);
        setCountdownIsOver(true);

        return;
      }

      const dayNumber = Math.floor(interval / day);
      const hourNumber = Math.floor((interval % day) / hour);
      const minuteNumber = Math.floor((interval % hour) / minute);
      const secondNumber = Math.floor((interval % minute) / second);

      setDay(dayNumber);
      setHour(hourNumber);
      setMinute(minuteNumber);
      setSecond(secondNumber);

      setCountdownIsOver(false);
    };

    intervalRef.current = setInterval(countdown, 1000);

    return () => clearInterval(intervalRef.current);
  }, [date]);

  return [day, hour, minute, second, countdownIsOver];
};

export default useCountdown;