import Title from "../components/Title";
import Counter from "../components/Counter";

import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";
import { Navigate } from "react-router-dom";

import useCountdown from "../hooks/useCountdown";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title value={eventTitle} eventColor={event.color} />
      <div className="countdown-container">
        <Counter number={day} title="Dias" eventColor={event.color} />
        <Counter number={hour} title="Horas" eventColor={event.color} />
        <Counter number={minute} title="Minutos" eventColor={event.color} />
        <Counter number={second} title="Segundos" eventColor={event.color} />
      </div>
    </>
  );
};

export default Countdown;
