import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreweryDetails = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    const fetchBrewery = async () => {
      const response = await fetch(
        `https://api.openbrewerydb.org/v1/breweries/${id}`
      );
      const data = await response.json();
      setBrewery(data);
    };

    fetchBrewery();
  }, [id]);

  if (!brewery)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h1>{brewery.name}</h1>
      <h3>Type: {brewery.brewery_type}</h3>
      <p>
        <strong>Address:</strong> {brewery.address_1}{" "}
        {brewery.address_2 && `, ${brewery.address_2}`}, {brewery.city},{" "}
        {brewery.state_province} {brewery.postal_code}, {brewery.country}
      </p>
      <p>
        <strong>Phone:</strong>{" "}
        <a href={`tel:${brewery.phone}`}>{brewery.phone}</a>
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
          {brewery.website_url}
        </a>
      </p>
      <h4>Coordinates:</h4>
      <p>
        Latitude: {brewery.latitude}, Longitude: {brewery.longitude}
      </p>
    </div>
  );
};

export default BreweryDetails;
