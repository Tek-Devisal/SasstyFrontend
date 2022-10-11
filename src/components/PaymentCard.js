import React from "react";
import { Grid, Paper, CardMedia } from "@mui/material";

const PaymentCard = ({ image }) => {
  return (
    <Grid item>
      <Paper
        elevation={5}
        style={{
          width: 90,
          height: 65,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <CardMedia image={"../assets/mtn-momo-logo.png"} />
      </Paper>
    </Grid>
  );
};

export default PaymentCard;
