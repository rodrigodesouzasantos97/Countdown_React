import { Outlet } from "react-router-dom";

import { useContext } from "react";
import { CountdownContext } from "./context/CountdownContext";

import "./App.css";

function App() {
  const { event } = useContext(CountdownContext);

  let eventImage = null;

  if (event) eventImage = event.imgUrl;

  return (
    <>
      <div
        id="app"
        style={
          eventImage
            ? { backgroundImage: `url(${eventImage})` }
            : { backgroundImage: `none` }
        }
      >
        <div id="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
