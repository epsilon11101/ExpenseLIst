import "./Card.css";
/*
children.props is all the content inside the parent tag
*/
const Card = (props) => {
  const classes = "card " + props.className;
  console.log(classes);
  return <div className={classes}>{props.children}</div>;
};

export default Card;
