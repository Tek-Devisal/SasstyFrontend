import React, { useRef, useState } from "react";
import {
  Box,
  ButtonBase,
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
} from "@mui/material";
import { Camera, PhotoCamera } from "@mui/icons-material";

const AppImageInput = ({ value, name, onChange }) => {
  const [image, setImage] = useState(null);
  const button = useRef(null);

  const handleChange = ({ target: input }) => {
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      console.log("Reading...");
      setImage(target.result);
    };

    const file = input.files[0];
    reader.readAsDataURL(file);

    if (onChange) onChange(file);
  };

  return (
    <Grid item xs={12}>
      <ButtonBase
        onClick={() => button.current.click()}
        style={{
          width: "100%",
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card style={{ width: "100%" }}>
          <Box style={{ width: "100%", height: 200 }}>
            {!image ? (
              <Box
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PhotoCamera style={{ fontSize: 100 }} />
              </Box>
            ) : (
              <CardMedia
                style={{ width: "100%", height: "100%" }}
                image={value || image}
              />
            )}
          </Box>
          <CardContent>
            <Typography align="center">Tap to upload a picture</Typography>
          </CardContent>
        </Card>
      </ButtonBase>
      <input
        ref={button}
        style={{ display: "none" }}
        type="file"
        name={name}
        accept="image/jpg"
        onChange={handleChange}
      />
    </Grid>
  );
};

export default AppImageInput;
