import React from "react";
import { Box, Typography, Button } from "@mui/material";
export default function About_section() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: "70vh",
          width: "100%",
          backgroundImage: 'url("src/assets/dlims-sectionbg2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: "white",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", md: "50%" },
            p: 2,
          }}
        >
          <img
            src="src/assets/about_us.png"
            style={{ width: "60%", height: "60%" }}
          />
        </Box>
        {/* Content Box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            p: 4,
          }}
        >
          <Button
            sx={{
              bgcolor: "#fff4e0",
              color: "#fca80f",
              py: 0.5,
              px: 3,
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow: "none",
              pointerEvents: "none",
              userSelect: "text",
            }}
          >
            ABOUT US
          </Button>
          <Typography
            sx={{
              color: "#159f48",
              fontSize: "40px",
              mt: 2,

              fontWeight: 800,
              maxWidth: "550px",
            }}
          >
            About Dlims - Powered By Dastak
          </Typography>
          <Typography
            sx={{
              color: "grey",
              mt: 3,
              maxWidth: "600px",
            }}
          >
            The Driving License Information Management System (DLIMS) is an
            integrated component of the Government of Punjab’s Dastak - One
            Window for all Government Services which securely carries out all
            DLIMS processes including form submission, verification, payment,
            and card tracking.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
