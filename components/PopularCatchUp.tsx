import { Box, Typography } from "@mui/material";
import RecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import { FlexRow } from "./FlexRow";
import { CatchUpCard } from "./CatchUpCard";

export const PopularCatchUp = () => {
  return (
    <div style={{ marginTop: 1 }}>
      <Typography color="grey">
        <b>POPULAR </b>
        CATCH-UP
      </Typography>
      <Box
        sx={{ my: 2.5, overflow: "auto", mx: "auto" }}
        className="remove-scrollbar webkit-remove-scrollbar"
      >
        <FlexRow
          sx={{
            width: 850,
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          <CatchUpCard />
          <CatchUpCard />
          <CatchUpCard />
        </FlexRow>
      </Box>
    </div>
  );
};
