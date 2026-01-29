import React from "react";
import { Stack, Typography, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Link from "next/link";

const PropertyCard = () => {
    const imagePath: string = "/img/banner/header1.svg"

  return (
    <Stack className="card-config">
      <Stack className="top">
        <Link href="/property/detail">
          <img src={imagePath} alt="property" />
        </Link>

        <Box className="top-badge">
          <Typography>TOP</Typography>
        </Box>

        <Box className="price-box">
          <Typography>$250000</Typography>
        </Box>
      </Stack>

      <Stack className="bottom">
        <Stack className="name-address">
          <Stack className="name">
            <Typography>Kingstone Apartments</Typography>
          </Stack>
          <Stack className="address">
            <Typography>Busan, City Center 200 - 5</Typography>
          </Stack>
        </Stack>

        <Stack className="options">
          <Stack className="option">
            <Typography>2 bed</Typography>
          </Stack>
          <Stack className="option">
            <Typography>7 room</Typography>
          </Stack>
          <Stack className="option">
            <Typography>170 m²</Typography>
          </Stack>
        </Stack>

        <Stack className="divider"></Stack>

        <Stack className="type-buttons">
          <Stack className="type">
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Rent
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "13px" }}>
              Barter
            </Typography>
          </Stack>

          <Stack className="buttons">
            <IconButton>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">100</Typography>

            <IconButton>
              <FavoriteIcon color="primary" />
            </IconButton>
            <Typography className="view-cnt">20</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PropertyCard;
