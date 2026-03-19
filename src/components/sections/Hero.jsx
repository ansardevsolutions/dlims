import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      component="section"
      id="home_section"
      className="main-banner"
      sx={{
        pt: { xs: 4, md: 6, lg: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Box>
          {/* Dastak Hero Logo */}
          <Box sx={{ mb: 1 }}>
            <img
              src="https://dlims.punjab.gov.pk/theme_new/assets/images/dastak_landing_hero_logo.png"
              alt="Dastak"
              style={{ width: "100%", maxWidth: "190px", height: "auto" }}
            />
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", md: "22px", lg: "21px" },
                fontWeight: 500,
                color: "#787878",
                mb: 1,
              }}
            >
              All online driving license services are now
            </Typography>
          </Box>
          {/* Hero Text */}

          {/* Powered by Dastak Image */}
          <Box sx={{ mb: 2 }}>
            <img
              src="https://dlims.punjab.gov.pk/theme_new/assets/images/dastak_landing_hero_powered.png"
              alt="Powered by Dastak"
              style={{ width: "100%", maxWidth: "300px", height: "auto" }}
            />
          </Box>

          {/* One Window Text */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: "2px",
                backgroundColor: "#da8100",
                borderRadius: "2px",
              }}
            />
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "36px", md: "56px", lg: "40px" },
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  color: "#038b45",
                }}
              >
                One-Window
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "24px", md: "40px", lg: "28px" },
                  fontWeight: 750,
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  color: "#da8100",
                  mt: 0,
                }}
              >
                for all Government Services
              </Typography>
            </Box>
          </Box>

          {/* Apply License Button */}
          <Button
            component="a"
            href="https://dlims.punjab.gov.pk/login"
            variant="contained"
            sx={{
              color: "white",
              px: 6,
              py: 1,
              fontSize: "16px",
              borderRadius: "30px",
              fontWeight: 700,
              background: "linear-gradient(105deg, #214d03 100%, #3a7d1c 100%)",
              textTransform: "uppercase",
              boxShadow: "0 4px 12px rgba(242, 146, 29, 0.3)",
              "&:hover": {
                bgcolor: "#214d03",
              },
            }}
          >
            APPLY LICENSE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
