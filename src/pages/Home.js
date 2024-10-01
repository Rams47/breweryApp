import React, { useEffect, useState } from "react";
import axios from "axios";
import BreweryCard from "../components/BreweryCard";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openbrewerydb.org/v1/breweries"
        );
        setBreweries(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
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
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={1}
      backgroundColor="#f2f2f2"
      paddingTop="10px"
    >
      {breweries.map((brewery, index) => (
        <Box
          key={index}
          sx={{
            width: {
              xs: "100%",
              sm: "50%",
              md: "31.33%",
            },
            flexShrink: 0,
          }}
        >
          <Link
            to={`/breweries/${brewery.id}`}
            style={{ textDecoration: "none" }}
          >
            <BreweryCard brewery={brewery} />
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default HomePage;
