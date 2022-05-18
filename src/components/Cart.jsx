import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  CardHeader,
  CardMedia,
} from "@mui/material";
// import { CartItem } from "./CartItem";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Cart = ({ purchases, cardOpen, closeCard, productOfBuy }) => {
  const goods = JSON.stringify(purchases);
  console.log(goods);
  return (
    <Drawer anchor="right" open={cardOpen} onClose={closeCard}>
      <List sx={{ width: "350px" }}>
        <ListItem>
          <ListItemIcon>
            <IconButton color="inherit" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Basket" />
        </ListItem>
        <Divider />

        <ListItem>no products selected</ListItem>
        {/* <CardHeader title={productOfBuy.name} />
        <CardMedia image={productOfBuy.img} component="img" sx={{ height: 280, width: "auto", mx: "auto" }} /> */}

        {/* {!order.length ? (
        ) : (
          order.map((product) => {
            // <BasketItem key={product.name} removeOrder={removeOrder} {...product} />;
          })
        )} */}
      </List>
    </Drawer>
  );
};
