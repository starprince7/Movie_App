import { Box, Typography } from "@mui/material";
import RecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";
import React from "react";
import { FlexRow } from "./FlexRow";
import { TVShowCard } from "./TVShowCard";
import { useTmdb } from "@/hooks/useFetch";

export const TvShows = () => {
  const { data: trending } = useTmdb("/trending/tv/week");
  // console.log(trending);

  return (
    <div style={{ marginTop: 1 }}>
      <Typography color="grey">
        <b>TRENDING </b>
        TVSHOWS
      </Typography>
      <Box
        sx={{
          my: 2.5,
          overflow: "auto",
          mx: "auto",
        }}
        className="remove-scrollbar webkit-remove-scrollbar"
      >
        <FlexRow
          sx={{
            width: 850,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {trending.map(({ poster_path, original_name }, index) => (
            <Link href={`/movie/${original_name}`} key={index}>
              <TVShowCard imagePath={poster_path} title={original_name} />
            </Link>
          ))}
        </FlexRow>
      </Box>
    </div>
  );
};
