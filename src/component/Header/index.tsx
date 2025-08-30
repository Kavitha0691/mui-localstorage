import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ height: "15%", justifyContent: "center", my: 3 }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: "red", textTransform: "uppercase", fontWeight: "bold", textAlign: "center" }}
        >
          Whack a Mole
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
