import "./Title.css"

const Title = ({ value, eventColor }) => {
  return <h1 id="title" style={{color: eventColor}}>{value}</h1>;
};

export default Title;
