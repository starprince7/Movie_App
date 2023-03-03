import React, { useEffect, useRef } from "react";

type Props = { item: any };

export const MoviePoster = ({ item }: Props) => {
  const getImageURL = (path: string) => {
    return !path
      ? "loading.gif"
      : `https://image.tmdb.org/t/p/w600_and_h600_bestv2${path}`;
  };

  return (
    <div
      className="movie_poster_background"
      style={{
        backgroundImage: `url(${getImageURL(
          item?.backdrop_path || item?.poster_path,
        )})`,
      }}
    ></div>
  );
};
