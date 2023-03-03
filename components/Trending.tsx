import { Box, Typography } from "@mui/material";
import RecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import { FlexRow } from "./FlexRow";
import { TrendingCard } from "./TrendingCard";
import { useTmdb } from "@/hooks/useFetch";

export const Trending = () => {
  // const { data: trending } = useTmdb("/trending/tv/week");
  // console.log(trending);

  return (
    <div style={{ marginTop: 30 }}>
      <Typography color="grey">
        <b>TRENDING </b>
        LIVE TV
      </Typography>
      <Box
        sx={{
          my: 2.5,
          overflow: "auto",
          mx: "auto",
          // border: "solid green 2px",
        }}
        className="remove-scrollbar webkit-remove-scrollbar"
      >
        <FlexRow
          sx={{
            width: 850,
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
            pr: 3,
          }}
        >
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </FlexRow>
      </Box>
    </div>
  );
};
