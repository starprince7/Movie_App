import { Box, Typography } from "@mui/material";
import RecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import { FlexRow } from "./FlexRow";

export const CatchUpCard = () => {
  return (
    <Box
      sx={{
        border: "solid red 1px",
        borderColor: "secondary.light",
        borderRadius: 2,
        px: 1.5,
        py: 1,
        mr: 2,
        width: { xs: 240, md: 300, lg: 400 },
        minWidth: { xs: 240, md: 300, lg: 400 },
        // bgcolor: "secondary.main",
        boxShadow: "0 6px 10px",
      }}
    >
      <FlexRow justifyContent="space-between" alignItems="center">
        <Box>
          <Box sx={{ ml: 2 }}>
            <Typography fontWeight={600} color="grey">
              Romedy Now
            </Typography>
            <Typography color="secondary.light">CATCH-UP</Typography>
          </Box>
        </Box>
        <Box sx={{ width: 60 }}>
          <img
            src="/Romedy_Now_HD.webp"
            alt="catch-up tv logo"
            style={{ width: "100%" }}
          />
        </Box>
      </FlexRow>
    </Box>
  );
};
