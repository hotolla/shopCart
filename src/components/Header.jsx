import { Box, TextField, Toolbar, IconButton, AppBar, InputAdornment } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

export const Header = ({ orderLen, handleCard }) => {
  //булевые примитивы объекты функции
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Box ml="auto" mr={6}>
          <TextField
            type="search"
            placeholder="product search"
            sx={{ color: "white" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <IconButton color="inherit" aria-label="add to shopping cart" onClick={handleCard}>
          <AddShoppingCartIcon />
        </IconButton>
        {/* <Badge color="secondary" badgeContent={orderLen}>
          <ShoppingCartIcon onClick={handleCard} />
        </Badge> */}
      </Toolbar>
    </AppBar>
  );
};
