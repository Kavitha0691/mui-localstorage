"use client";

import { AppBar, Toolbar, Typography, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              textTransform: "uppercase",
              fontWeight: "bold",
              textAlign: "center",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
              },
              [theme.breakpoints.up("sm")]: {
                fontSize: "2.5rem",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "3rem",
              },
            })}
          >
            Whack a Mole
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
