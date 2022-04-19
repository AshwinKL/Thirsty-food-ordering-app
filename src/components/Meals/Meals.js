import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return <AvailableMeals onCartClick={props.onCartClick}></AvailableMeals>;
};

export default Meals;
