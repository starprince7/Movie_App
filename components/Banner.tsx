import apiClient from "@/config/apiClient";
import tmdb from "@/config/tmdbApi";
import { useTmdb } from "@/hooks/useFetch";
import { Box } from "@mui/material";
import Carousel from "nuka-carousel";
import React from "react";

export const Banner = () => {
  const { data: movies } = useTmdb("/movie/popular");
  // console.log(movies);

  const getImageURL = (path: string) => {
    return `https://image.tmdb.org/t/p/w600_and_h600_bestv2${path}`;
  };

  return (
    <Box>
      <Carousel
        dragging
        animation="fade"
        swiping
        // cellAlign="center"
        autoplay
        autoplayInterval={500}
        autoplayReverse
        cellSpacing={2}
        withoutControls
        // adaptiveHeight
        zoomScale={0.5}
        slidesToShow={3}
        // style={{ border: "solid green 4px", height: 600 }}
      >
        {movies.map(({ poster_path, title }, index) => (
          <Box
            sx={{
              width: { xs: 200, md: 350, lg: 750 },
              height: "auto",
            }}
            key={index}
          >
            <img
              src={getImageURL(poster_path)}
              alt={title}
              key={index}
              style={{
                borderRadius: 15,
                // margin: "5px 0",
                width: "100%",
                boxShadow: "0px 5px 35px #090909",
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
