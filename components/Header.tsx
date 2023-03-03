import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { FlexRow } from "./FlexRow";
import Image from "next/image";

type Props = {};

export const Header = () => {
  return (
    <header>
      <FlexRow justifyContent="space-between" sx={{ bgcolor: "black", p: 1 }}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Image
          src="/netflix_logo.png"
          alt="Brand Logo"
          width={80}
          height={40}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </FlexRow>
    </header>
  );
};
