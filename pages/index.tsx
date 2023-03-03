import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Box, Container } from "@mui/material";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Trending } from "@/components/Trending";
import { LatestMovies } from "@/components/LatestMovies";
import { PopularCatchUp } from "@/components/PopularCatchUp";
import { TvShows } from "@/components/TvShows";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tv App</title>
        <meta name="description" content="Stream your favorite shows today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Container maxWidth="lg" disableGutters>
        <Trending />
        <LatestMovies />
        <PopularCatchUp />
        <TvShows />
      </Container>
    </>
  );
}
