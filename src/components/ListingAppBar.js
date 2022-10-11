import React from "react";
import { AppBar, Button, Grid, Link, Toolbar } from "@mui/material";

const links = [
  { label: "Terms of Use", link: "/" },
  { label: "Sell On Sassty", link: "/" },
  { label: "SasstyPLUS", link: "/" },
  { label: "Track Your Order", link: "/" },
  { label: "Help", link: "/" },
];

const ListingAppBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Grid container direction="row" justifyContent="center">
            {links.map((item) => (
              <Grid style={{ margin: "0 10px" }} item>
                <Link style={{ textDecoration: "none" }} to={item.link}>
                  <Button
                    style={{ color: "white", textDecoration: "none" }}
                    disableRipple
                  >
                    {item.label}
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom: 60 }} />
    </div>
  );
};

export default ListingAppBar;
