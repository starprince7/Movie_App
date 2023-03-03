import { Box, Typography } from "@mui/material";
import RecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import { FlexRow } from "./FlexRow";

export const TrendingCard = () => {
  return (
    <Box
      sx={{
        // border: "solid red 1px",
        borderColor: "secondary.light",
        borderRadius: 2,
        px: { xs: 1.5, md: 2.3 },
        py: { xs: 0.5, md: 3 },
        mr: 1.7,
        width: { xs: 250, md: 300, lg: 400 },
        minWidth: { xs: 250, md: 300, lg: 400 },
        // bgcolor: "secondary.main",
        boxShadow: "0 6px 15px",
      }}
    >
      <FlexRow justifyContent="space-between" alignItems="center">
        <Box>
          <FlexRow alignItems="center">
            <RecordIcon color="error" sx={{ fontSize: 10, mr: 0.7 }} />
            <Typography variant="subtitle1" color="white">
              News 9pm
            </Typography>
          </FlexRow>
          <Box sx={{ ml: 2 }}>
            <Typography variant="body2" color="secondary.light">
              Live
            </Typography>
            <Typography variant="body2" color="secondary.main">
              20 min left
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: 60 }}>
          <img
            src="/cnn_logo.png"
            alt="trending tv logo"
            style={{ width: "100%" }}
          />
        </Box>
      </FlexRow>
    </Box>
  );
};
