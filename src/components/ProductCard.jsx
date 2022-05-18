import { useCallback, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import { Button, CardMedia, IconButton } from "@mui/material";

export const ProductCard = ({ product, onBuy }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(product);

  function toggleIsFavorite() {
    setIsFavorite((isFavorite) => !isFavorite);
  }

  const handleClick = () => {
    onBuy(product);
  };

  return (
    <Grid item xs={12} md={4} xl={3}>
      <Card sx={{ height: "100%" }}>
        <CardHeader title={product.name} />
        <CardMedia image={product.img} component="img" sx={{ height: 280, width: "auto", mx: "auto" }} />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.text}
          </Typography>

          <Typography variant={"h5"}>Price : ${product.price}</Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton color={isFavorite ? "error" : "inherit"} aria-label="add to favorites" onClick={toggleIsFavorite}>
            <FavoriteIcon />
          </IconButton>

          <Button variant="contained" sx={{ ml: "auto" }} onClick={handleClick}>
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
