import React from "react";
import { Box } from "@mui/material";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Stats from "../components/sections/Stats";
import Tracking_section from "../components/sections/Tracking_section";
import About_section from "../components/sections/About_section";
import About_section3 from "../components/sections/About_section3";

const Home = () => {
  return (
    <Box className="home-page">
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          backgroundImage: 'url("src/assets/landing.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Content (Hero) */}
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: "10%",
            transform: "translateY(-50%)",
            color: "white",
            maxWidth: "500px",
          }}
        >
          <Hero />
        </Box>
      </Box>

      {/* Baqi Sections */}
      <Tracking_section />
      <About_section />
      <About_section3 />
      <Services />
      <Stats />
    </Box>
  );
};

export default Home;
