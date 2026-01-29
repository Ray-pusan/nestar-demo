import React, { useState } from "react";
import {
  Stack,
  Typography,
  Checkbox,
  Button,
  OutlinedInput,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { propertySquare } from "@/libs/config";

const Filter = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const [propertyPrice, setPropertyPrice] = useState({
    start: 0,
    end: 250000,
  });

  return (
    <Stack className={"filter-main"}>
      {/* SEARCH */}
      <Stack className={"find-your-home"} mb={"40px"}>
        <Typography className={"title-main"}>Find Your Home</Typography>

        <Stack className={"input-box"}>
          <OutlinedInput
            value={searchText}
            type="text"
            className="search-input"
            placeholder="What are you looking?"
            onChange={(e: any) => setSearchText(e.target.value)}
          />
          <img src="/img/icons/search_icon.png" alt="" />

          <Tooltip title="Reset">
            <IconButton>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      {/* LOCATION */}
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Location</Typography>

        <Stack
          className="property-location"
          style={{ height: showMore ? "253px" : "115px" }}
        >
          {["SEOUL", "BUSAN", "DAEGU"].map((location) => (
            <Stack className="input-box" key={location}>
              <Checkbox
                id={location}
                className="property-checkbox"
                size="small"
                value={location}
              />
              <label htmlFor={location} style={{ cursor: "pointer" }}>
                <Typography className="property-type">
                  {location}
                </Typography>
              </label>
            </Stack>
          ))}
        </Stack>
      </Stack>

      {/* PROPERTY TYPE */}
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Property Type</Typography>

        {["APARTMENT", "HOUSE", "VILLA"].map((type) => (
          <Stack className="input-box" key={type}>
            <Checkbox className="property-checkbox" size="small" />
            <Typography className="property_type">{type}</Typography>
          </Stack>
        ))}
      </Stack>

      {/* ROOMS */}
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Rooms</Typography>

        <Stack className="button-group">
          {["Any", "1", "2", "3", "4", "5+"].map((item, i) => (
            <Button
              key={item}
              sx={{
                borderRadius: i === 0 ? "12px 0 0 12px" : 0,
                border: i === 2 || i === 4 ? "2px solid #181A20" : "1px solid #b9b9b9",
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Stack>

      {/* BED ROOMS */}
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Bed rooms</Typography>

        <Stack className="button-group">
          {["Any", "1", "2", "3", "4", "5+"].map((item, i) => (
            <Button
              key={item}
              sx={{
                borderRadius: i === 0 ? "12px 0 0 12px" : 0,
                border: "2px solid #181A20",
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Stack>

      {/* OPTIONS */}
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Options</Typography>

        {["Barter", "Rent"].map((opt) => (
          <Stack className="input-box" key={opt}>
            <Checkbox size="small" />
            <Typography className="propert-type">{opt}</Typography>
          </Stack>
        ))}
      </Stack>

      {/* SQUARE */}
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Square meter</Typography>

        <Stack className="square-year-input">
          <FormControl>
            <InputLabel>Min</InputLabel>
            <Select value={0} label="Min">
              {propertySquare.map((s: number) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="central-divider"></div>

          <FormControl>
            <InputLabel>Max</InputLabel>
            <Select value={500} label="Max">
              {propertySquare.map((s: number) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>

      {/* PRICE */}
      <Stack className={"find-your-home"}>
        <Typography className={"title"}>Price Range</Typography>

        <Stack className="square-year-input">
          <input
            type="number"
            placeholder="$ min"
            value={propertyPrice.start}
            onChange={(e) =>
              setPropertyPrice({ ...propertyPrice, start: +e.target.value })
            }
          />
          <div className="central-divider"></div>
          <input
            type="number"
            placeholder="$ max"
            value={propertyPrice.end}
            onChange={(e) =>
              setPropertyPrice({ ...propertyPrice, end: +e.target.value })
            }
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Filter;
