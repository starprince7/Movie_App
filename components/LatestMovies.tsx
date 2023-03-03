import { useTmdb } from "@/hooks/useFetch";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

import { FlexRow } from "./FlexRow";
import { LatestMovieCard } from "./LatestMovieCard";

export const LatestMovies = () => {
  const { data: latest } = useTmdb("/movie/top_rated");
  // console.log("latest", latest);
  // console.log("latest", typeof latest);

  return (
    <div style={{ marginTop: 1 }}>
      <Typography color="grey">
        <b>LATEST </b>
        MOVIES
      </Typography>
      <Box
        sx={{
          my: 2.5,
          overflow: "auto",
          mx: "auto",
          width: "100%",
        }}
        className="remove-scrollbar webkit-remove-scrollbar"
      >
        <FlexRow
          sx={{
            width: "1000px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {latest.map(({ poster_path, id, original_title }, index) => (
            <Link href={`/movie/${original_title}`}>
              <LatestMovieCard imagePath={poster_path} key={index} />
            </Link>
          ))}
        </FlexRow>
      </Box>
    </div>
  );
};
