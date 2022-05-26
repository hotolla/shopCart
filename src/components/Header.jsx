import { Box, TextField, Toolbar, IconButton, AppBar, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Header = ({ handleCard }) => {
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
      </Toolbar>
    </AppBar>
  );
};
