import React, { useEffect, useState } from "react";
import axios from "axios";
import BreweryCard from "../components/BreweryCard";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const itemsPerPage = 21;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.openbrewerydb.org/v1/breweries?by_dist=${location.latitude},${location.longitude}&per_page=${itemsPerPage}&page=${page}`
        );
        setBreweries(response.data);

        const estimatedTotalItems = 1000;
        setTotalPages(Math.ceil(estimatedTotalItems / itemsPerPage));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

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
      flexDirection="column"
      alignItems="center"
      paddingTop="10px"
    >
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
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

      <Box
        mt={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </Button>

        <Typography variant="body1">
          Page {page} of {totalPages}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
