import Title from "../components/Title";
import Counter from "../components/Counter";

import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";
import { Navigate, useNavigate } from "react-router-dom";

import Confetti from "react-confetti";

import useCountdown from "../hooks/useCountdown";

import "./Countdown.css";

const Countdown = () => {
  const navigate = useNavigate();

  const { event, setEvent } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;

  const [day, hour, minute, second, countdownIsOver] = useCountdown(event.date);

  const handleBack = () => {
    const eventObject = {
      title: "",
      date: "",
      imgUrl: "",
      color: "",
    };

    setEvent(eventObject);

    navigate("/");
  };

  return (
    <>
      {countdownIsOver && <Confetti />}
      <Title value={eventTitle} eventColor={event.color} />
      <div className="countdown-container">
        <Counter number={day} title="Dias" eventColor={event.color} />
        <Counter number={hour} title="Horas" eventColor={event.color} />
        <Counter number={minute} title="Minutos" eventColor={event.color} />
        <Counter number={second} title="Segundos" eventColor={event.color} />
      </div>
      <button id="back-btn" onClick={() => handleBack()}>
        Voltar
      </button>
    </>
  );
};

export default Countdown;
