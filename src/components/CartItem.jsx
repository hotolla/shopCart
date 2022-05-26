import { Close } from "@mui/icons-material";
import { IconButton, Typography, CardMedia, Button, Container } from "@mui/material";

export const CartItem = ({ purchase, removeOrder }) => {
  const handleRemove = () => {
    removeOrder(purchase);
  };

  return (
    <>
      <Container sx={{ m: 2 }}>
        <Typography variant="h5">{purchase.name}</Typography>
        <IconButton onClick={handleRemove}>
          <Close />
        </IconButton>
        <CardMedia image={purchase.img} component="img" sx={{ height: 150, width: "auto", mx: "auto" }} />
        <Button variant="contained" sx={{ ml: "auto" }}>
          ${purchase.price} Buy
        </Button>
      </Container>
    </>
  );
};
