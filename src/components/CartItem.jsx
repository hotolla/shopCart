import { Close } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

export const CartItem = ({ removeOrder, id, name, price, quality, product }) => {
  return (
    <Typography variant="body1">
      {product.name} ${product.price}
      <IconButton onClick={() => product.removeOrder(product.id)}>
        <Close />
      </IconButton>
    </Typography>
  );
};
