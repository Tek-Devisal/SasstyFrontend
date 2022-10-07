import React, { useState, createContext } from "react";
import { Box, Container } from "@mui/material";

import AppStepper from "../components/AppStepper";
import CreateListing from "../components/CreateListing";
import UploadPhotos from "../components/UploadPhotos";
import ReviewList from "../components/AppReviews";
import ListingApproval from "../components/ListingApproval";
import ListingAppBar from "../components/ListingAppBar";

const steps = [
  "Create Listing",
  "Upload Photos",
  "Listing Reviews",
  "Listing Approval",
];

export const ListingsContext = createContext();
export const TestContext = createContext();
const Listings = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  return (
    <ListingsContext.Provider value={{ activeStep, handleNext, handlePrev }}>
      <ListingAppBar />
      <Container maxWidth="lg">
        <Box style={{ padding: 50 }}>
          <AppStepper steps={steps} activeStep={activeStep} />
        </Box>
        {renderContent(activeStep)}
      </Container>
    </ListingsContext.Provider>
  );
};

const renderContent = (activeStep) => {
  if (activeStep === 0) return <CreateListing />;
  else if (activeStep === 1) return <UploadPhotos />;
  else if (activeStep === 2) return <ReviewList />;
  else if (activeStep === 3) return <ListingApproval />;
  else return null;
};

export default Listings;
