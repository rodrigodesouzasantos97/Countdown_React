import "./Counter.css";

const Counter = ({ number, title, eventColor }) => {
  return (
    <div id="counter">
      <p style={{backgroundColor: eventColor}}>{number}</p>
      <h3 style={{color: eventColor}}>{title}</h3>
    </div>
  );
};

export default Counter;
