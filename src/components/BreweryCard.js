import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const BreweryCard = ({ brewery }) => {
  const {
    name,
    address_1,
    phone,
    website_url,
    rating = 0,
    city,
    state,
  } = brewery;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    }
    return text;
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "16px",
        border: "2px solid transparent",
        transition: "0.3s",
        "&:hover": {
          boxShadow: 3,
          transform: "scale(1.03)",
          borderColor: "#add8e6",
          borderStyle: "solid",
          cursor: "pointer",
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {name ? truncateText(name, 20) : "NA"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address_1 ? address_1 : "NA"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {phone ? phone : "NA"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Website:
          {website_url ? (
            <a href={website_url} target="_blank" rel="noopener noreferrer">
              {website_url}
            </a>
          ) : (
            "NA"
          )}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "8px" }}>
          Rating: {rating} / 5
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {city}, {state}
        </Typography>
      </CardContent>
      <Button size="small" href={website_url} target="_blank">
        Visit Website
      </Button>
    </Card>
  );
};

export default BreweryCard;
