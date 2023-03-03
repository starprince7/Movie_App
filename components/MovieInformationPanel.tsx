import { Box } from "@mui/system";
import { PlayArrowRounded as PlayIcon } from "@mui/icons-material";
import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { LatestMovies } from "./LatestMovies";

type Props = { item: any };

export const MovieInformationPanel = ({ item }: Props) => {
  const casts = [1, 2, 3, 4];
  return (
    <Box
      sx={{
        // border: "solid red 2px",
        height: "auto",
        maxWidth: "90%",
        mx: "auto",
        mt: { lg: "-35%", xs: "-35%" },
        background: "#212121b8",
        // background: "black",
        borderRadius: 3,
        zIndex: 500,
        position:
          "relative" /* This Property is needed for Z Index to function. */,
        boxShadow: "0px 5px 15px black !important",
      }}
    >
      <div
        style={{
          //   border: "solid red 2px",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "-38px",
          width: "100%",
        }}
      >
        <IconButton
          //   disableFocusRipple
          // disableRipple
          sx={{
            width: { md: 100, xs: 70 },
            height: { md: 100, xs: 70 },
            backgroundColor: "whitesmoke",
            "$:hover": { backgroundColor: "whitesmoke" },
            "&:active": { backgroundColor: "whitesmoke" },
            "&:focus": { backgroundColor: "whitesmoke" },
          }}
        >
          <PlayIcon sx={{ width: 40, height: 40, color: "#e91e63" }} />
        </IconButton>
      </div>
      <Box
        sx={{
          py: { xs: 5, md: 6, lg: 15 },
          px: 2,
        }}
      >
        <Typography color="secondary.light" variant="subtitle1">
          Action . Thriller . Family
        </Typography>
        <Typography
          color="white"
          sx={{ fontSize: { xs: 38, md: 50, lg: 60 } }}
          fontWeight={600}
        >
          {item?.title || item?.original_name}
        </Typography>
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{ fontSize: { xs: 18, md: 20, lg: 25 } }}
          color="secondary.contrastText"
        >
          {item?.release_date}{" "}
          {item?.original_language === "en" && " | English"}
        </Typography>
        {/* Summary */}
        <Typography
          sx={{ mt: 2.5, mb: 1, fontSize: { md: 22 } }}
          variant="subtitle1"
          color="secondary.light"
        >
          SUMMARY
        </Typography>
        <Typography
          variant="body2"
          color="secondary.main"
          sx={{ fontSize: { md: 16, lg: 18 } }}
        >
          {item?.overview}
        </Typography>
      </Box>
      {/* Casting... */}
      <Box
        sx={{
          mb: 3,
          px: 2,
        }}
      >
        <Typography color="secondary.light">CASTING</Typography>
        <Grid container sx={{ mt: 0 }} columnSpacing={2} rowSpacing={1}>
          {casts.map((cast, index) => (
            <Grid item key={index}>
              <Image
                src="/actor_chris.jpeg"
                alt="cast"
                width={62}
                height={62}
                style={{ objectFit: "cover", borderRadius: 5, margin: "1px 0" }}
              />
              <Typography
                color="secondary.main"
                variant="body2"
                sx={{ width: 64 }}
              >
                Chris Hemsworth
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ px: 2 }}>
        <LatestMovies />
      </Box>
    </Box>
  );
};
