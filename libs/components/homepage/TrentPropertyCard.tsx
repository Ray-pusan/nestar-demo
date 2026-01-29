import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
// Assuming you have a CSS file for styles

const TrendPropertyCard = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        component={"div"}
        className={"card-img"}
        style={{ backgroundImage: `url(/img/banner/types/house.webp)` }}
      >
        <div>$10</div>
      </Box>
      <Box component={"div"} className={"info"}>
        <strong className={"title"}>Kingston Buildings</strong>
        <p className={"desc"}>This is super view apartments</p>
        <div className={"options"}>
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>2 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>5 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>120 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className={"bott"}>
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">100</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <Typography className="view-cnt">100</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;
