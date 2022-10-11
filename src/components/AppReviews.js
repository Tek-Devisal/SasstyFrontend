import React, { useContext } from "react";
import ReviewListItem from "./AppListingReviewListItem";
import { Box, Button, Grid, Container, List } from "@mui/material";

import { ListingsContext } from "../pages/Listings";

const reviews = [
  {
    id: "1",
    title: "Ama Amoh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit facilisi orci ut at. Vitae, eget id porttitor eu pellentesque adipiscing etiam ullamcorper.-",
    rating: 3,
  },
  {
    id: "2",
    title: "Ama Amoh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit facilisi orci ut at. Vitae, eget id porttitor eu pellentesque adipiscing etiam ullamcorper.- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit facilisi orci ut at. Vitae, eget id porttitor eu pellentesque adipiscing etiam ullamcorper.-",
    rating: 4,
  },
  {
    id: "3",
    title: "Ama Amoh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit facilisi orci ut at. Vitae, eget id porttitor eu pellentesque adipiscing etiam ullamcorper.-",
    rating: 5,
  },
  {
    id: "4",
    title: "Ama Amoh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit facilisi orci ut at. Vitae, eget id porttitor eu pellentesque adipiscing etiam ullamcorper.- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit facilisi orci ut at. Vitae, eget id porttitor eu pellentesque adipiscing etiam ullamcorper.-",
    rating: 2,
  },
  {
    id: "5",
    title: "Ama Amoh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit facilisi orci ut at. Vitae, eget id porttitor eu pellentesque adipiscing etiam ullamcorper.- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit facilisi orci ut at. Vitae, eget id porttitor eu pellentesque adipiscing etiam ullamcorper.-",
    rating: 5,
  },
];

const AppReviews = ({ list = reviews || [] }) => {
  const { handleNext } = useContext(ListingsContext);

  return (
    <Container>
      <List>
        {list.map((item) => (
          <Box style={{ marginBottom: 30 }}>
            <ReviewListItem
              title={item.title}
              text={item.text}
              ratings={item.rating}
            />
          </Box>
        ))}
      </List>

      <Grid
        container
        direction="row"
        justifyContent={"flex-end"}
        style={{ padding: "2em 0" }}
      >
        <Grid item>
          <Button
            color="secondary"
            variant="contained"
            style={{ width: 100 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppReviews;
