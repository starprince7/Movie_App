import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import React from "react";
import { FlexRow } from "./FlexRow";

type Props = {};

export const HeaderTransparent = () => {
  const router = useRouter();
  return (
    <header>
      <FlexRow
        justifyContent="space-between"
        sx={{
          bgcolor: "transparent",
          p: 1,
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 5,
          width: "95%",
        }}
      >
        <IconButton onClick={() => router.push("/")}>
          <MenuIcon />
        </IconButton>
        {/* <Image
          src="/netflix_logo.png"
          alt="Brand Logo"
          width={80}
          height={40}
        /> */}
        <IconButton onClick={() => router.back()}>
          <SearchIcon />
        </IconButton>
      </FlexRow>
    </header>
  );
};
