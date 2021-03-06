import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useState } from "react";

import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";

export const App = () => {
  const [isCardOpen, setCardOpen] = useState(false);
  const [purchases, setPurchases] = useState([]);

  function removeOrder({ id }) {
    setPurchases(purchases.filter((purchase) => id !== purchase.id));
  }

  const buyProduct = (product) => {
    setPurchases([...purchases, product]);
  };

  return (
    <>
      <Header handleCard={() => setCardOpen(true)} />

      <Container fixed>
        <Grid container rowSpacing={4} columnSpacing={4} mt={6}>
          <Products onBuy={buyProduct} />
        </Grid>
      </Container>

      <Cart
        purchases={purchases}
        cardOpen={isCardOpen}
        removeOrder={removeOrder}
        closeCard={() => setCardOpen(false)}
      />
    </>
  );
};

export default App;
