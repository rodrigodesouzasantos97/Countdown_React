import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CountdownContext } from "../context/CountdownContext";

import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [color, setColor] = useState("");

  const { setEvent } = useContext(CountdownContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      imgUrl,
      color,
    };

    setEvent(eventObject);
    navigate("/countdown");
  };

  return (
    <div id="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form id="countdown-form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título do evento"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Insira a URL da imagem"
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </label>

        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
