import { Box, Typography } from "@mui/material";
import RecordIcon from "@mui/icons-material/FiberManualRecord";
import Image from "next/image";
import React from "react";

import { FlexRow } from "./FlexRow";

type Props = {
  imagePath: string;
};

const getImageURL = (path: string) => {
  return `https://image.tmdb.org/t/p/w600_and_h600_bestv2${path}`;
};

export const LatestMovieCard = ({ imagePath }: Props) => {
  return (
    <Box
      sx={{
        // border: "solid red 1px",
        mr: 2.5,
        overflow: "hidden",
        borderColor: "secondary.light",
        borderRadius: 2,
        width: { xs: 150, md: 300, lg: 300 },
        minWidth: { xs: 150, md: 300, lg: 300 },
        height: { xs: 250, md: 400, lg: 450 },
        // bgcolor: "secondary.main",
        mb: 2,
        boxShadow: "0 5px 10px black",
      }}
    >
      <img
        src={getImageURL(imagePath)}
        alt="movie poster"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};
