import React, { useContext } from "react";
import { Grid, Typography, CardMedia, TextField, Button } from "@mui/material";

import PaymentCard from "./PaymentCard";
import Select from "./AppSelect";
import { ListingsContext } from "../pages/Listings";

const paymentMethods = [
  { id: 1, imageUri: "../assets/mtn-momo-logo.png" },
  { id: 2, imageUri: "../assets/airtel-tigo-money-logo.jpg" },
  { id: 3, imageUri: "../assets/vadafone-cash-logo.png" },
];

const items = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
];

const ListingApproval = ({}) => {
  const { activeStep, handleNext } = useContext(ListingsContext);

  return (
    <Grid container direction="row">
      <Grid item xs={12} lg={4} style={{ padding: 30 }}>
        <Grid container>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Create Listing for Product Name
            </Typography>
          </Grid>

          <CardMedia
            style={{
              width: "100%",
              height: 300,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: 10,
            }}
            image={
              "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
            }
          />
        </Grid>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Grid container style={{ padding: 30, paddingBottom: 50 }}>
          <Grid item style={{ width: "100%" }}>
            <Typography variant="h6" gutterBottom align="center">
              Connect to an account to receive payment
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ marginBottom: 20 }}
                >
                  In order to receive the payment for your product, we need you
                  to connect your account to the Sassty. Kindly select the
                  method you prefer.
                </Typography>
              </Grid>
              <Grid container spacing={2} style={{ marginBottom: 20 }}>
                {paymentMethods.map((item) => (
                  <PaymentCard src={"../assets/mtn-momo-logo.png"} />
                ))}
              </Grid>
              <Grid
                item
                container
                direction="column"
                style={{ marginBottom: 30 }}
              >
                <Grid item>
                  <Typography style={{ marginBottom: 20 }}>
                    Select Product Details
                  </Typography>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <Select name="size" items={items} label="Size" />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Select
                      name="quantity"
                      items={items}
                      label="Quantity"
                      value={1}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label="Listing Title"
                    variant="standard"
                    fullWidth
                    helperText="Give a short name for your product"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="standard"
                    fullWidth
                    label="Listing Description"
                    helperText="Describe in details your listing and what is included for the buyer."
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item>
                  <Select items={items} label="Ship from: Location" />
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  aligItems="center"
                  justifyContent="flex-end"
                  style={{ margin: "2em 0" }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                  >
                    Submit For Approval
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListingApproval;
