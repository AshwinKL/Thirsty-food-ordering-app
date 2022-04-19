import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartContextProvider from "./components/store/CartProvider";
import Footer from "./components/Layout/Footer";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals onCartClick={showCartHandler}></Meals>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </CartContextProvider>
  );
}

export default App;
