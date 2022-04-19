import mealImage from "../../assets/meals-bg.png";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={styles.header} id="home">
        <a href="#home">
          Thir<span>sty</span>
        </a>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="Pizza meal Background"></img>
      </div>
    </>
  );
};

export default Header;
