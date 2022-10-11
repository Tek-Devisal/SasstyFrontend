import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

const AppStepper = ({ onNext, onPrevious, activeStep = 0, steps = [] }) => {
  return (
    <Stepper alternativeLabel activeStep={activeStep}>
      {steps.map((step) => {
        return (
          <Step>
            <StepLabel>{step}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default AppStepper;
