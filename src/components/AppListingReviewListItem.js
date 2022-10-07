import React from "react";
import { Grid, Typography, Avatar, Rating } from "@mui/material";

const AppListingReviewListItem = ({ title, imageUri, ratings, text }) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item>
        <Grid>
          <Avatar style={{ height: 50, width: 50 }} image={imageUri} />
        </Grid>
      </Grid>
      <Grid item container direction="column" xs={10}>
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item>
          <Rating name="simple-rating" readOnly value={2} />
        </Grid>
        <Grid item>
          <Typography variant="body1">{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AppListingReviewListItem;
