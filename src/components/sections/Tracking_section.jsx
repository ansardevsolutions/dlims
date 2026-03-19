import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Grid } from "@mui/material";
export default function Tracking_section() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "auto",
        width: "100%",
        backgroundImage: 'url("src/assets/seo3.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // horizontal center
        alignItems: "center", // vertical center
      }}
    >
      {/* Content Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 10,
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
          Features
        </Button>
        <Typography
          sx={{
            color: "#159f48",
            fontSize: "40px",
            mt: 2,
            textAlign: "center",
            fontWeight: 800,
          }}
        >
          Dastak-Powered Processing
        </Typography>
        <Typography
          sx={{
            color: "grey",
            mt: 3,
          }}
        >
          Every request you submit is processed securely and systematically
          through the official
        </Typography>
        <Typography
          sx={{
            color: "#636373",
            fontWeight: "bold",
          }}
        >
          Dastak - One-Window for all Government Services
        </Typography>
      </Box>
      {/* ////////////////////Boxes */}
      <Box
        sx={{
          display: "flex",
          gap: 10,
          flexDirection: { lg: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            alignItems: "center", // center image & text
            gap: 1, // thodi spacing
          }}
        >
          <img
            src="src/assets/affect_less.png"
            alt="Application Icon"
            style={{ width: "50%", height: "50%" }}
          />

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              textAlign: "center",
              color: "#159f48",
            }}
          >
            Effortless Application Process
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              textAlign: "center",
              color: "#555",
            }}
          >
            Apply for your driving license from the comfort of your home. Skip
            the queues and paperwork with our streamlined online application
            process
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            alignItems: "center", // center image & text
            gap: 1, // thodi spacing
          }}
        >
          <img
            src="src/assets/real_time.png"
            alt="Application Icon"
            style={{ width: "50%", height: "50%" }}
          />

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              textAlign: "center",
              color: "#159f48",
            }}
          >
            Real-Time Application Tracking
          </Typography>

          <Typography
            sx={{ fontSize: "15px", textAlign: "center", color: "#555" }}
          >
            Access a personalized dashboard for real-time updates. Stay informed
            throughout the process
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            alignItems: "center", // center image & text
            gap: 1, // thodi spacing
          }}
        >
          <img
            src="src/assets/securepayment.png"
            alt="Application Icon"
            style={{ width: "50%", height: "50%" }}
          />

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              textAlign: "center",
              color: "#159f48",
            }}
          >
            Secure Payments via ePaysystem
          </Typography>

          <Typography
            sx={{ fontSize: "15px", textAlign: "center", color: "#555" }}
          >
            Pay securely and Generate your Payment Slip Identification (PSID)
            token seamlessly. Get your unique identifier for payment processing
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
