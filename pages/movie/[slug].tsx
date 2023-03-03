import { HeaderTransparent } from "@/components/HeaderTransparent";
import { MovieInformationPanel } from "@/components/MovieInformationPanel";
import { MoviePoster } from "@/components/MoviePoster";
import { useTmdb } from "@/hooks/useFetch";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function MoviePage() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: item } = useTmdb(`/search/multi?query=${slug}`);

  // console.log("The Item fetched with the slug : ", item);

  return (
    <div>
      <HeaderTransparent />
      <MoviePoster item={item[0]} />
      <MovieInformationPanel item={item[0]} />
    </div>
  );
}
