import { Box, Typography } from "@mui/material";
import RecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import { FlexRow } from "./FlexRow";

type Props = {
  imagePath: string;
  title: string;
};

const getImageURL = (path: string) => {
  return `https://image.tmdb.org/t/p/w600_and_h600_bestv2${path}`;
};

export const TVShowCard = ({ imagePath, title }: Props) => {
  return (
    <Box
      sx={{
        border: "solid red 1px",
        borderColor: "secondary.light",
        borderRadius: 2,
        width: "260px",
        minWidth: "260px",
        mr: 2,
        mb: 2,
        boxShadow: "0 6px 10px black",
        // bgcolor: "secondary.main",
      }}
    >
      <FlexRow justifyContent="start" alignItems="center">
        <img
          src={getImageURL(imagePath)}
          alt="Tv Show Poster"
          style={{
            width: "50%",
            height: "auto",
            borderRadius: 5,
            objectFit: "cover",
          }}
        />
        <Box>
          <Box sx={{ ml: 2, px: 1.5, pt: 1, pb: 2 }}>
            <Typography variant="subtitle2" color="secondary.main">
              Originals
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="secondary.light"
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </FlexRow>
    </Box>
  );
};
