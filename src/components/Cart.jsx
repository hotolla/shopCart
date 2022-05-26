import { Drawer, ListItem, List, ListItemText, Divider, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Purchases } from "./Purchases";

export const Cart = ({ purchases, cardOpen, closeCard, removeOrder, setPurchases, isCardOpen }) => {
  let title = null;
  
  function toggleIsTitle() {
    setPurchases((isTitle) => !isTitle);
  }

  return (
    <Drawer anchor="right" open={cardOpen} onClose={closeCard}>
      <List sx={{ width: "350px" }}>
        <ListItem>
          <ListItemText primary="Basket" />
          <IconButton onClick={closeCard}>
            <Close />
          </IconButton>
        </ListItem>
        <Divider />
        <ListItem alignItems="center" components={(title = purchases === [] ? "no products selected" : "")}>
          {title}
        </ListItem>
        <Purchases purchases={purchases} removeOrder={removeOrder} />
      </List>
    </Drawer>
  );
};
