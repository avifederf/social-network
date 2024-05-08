"use client";
import "./navbar.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-left row center">
        <FacebookSharpIcon color="primary" sx={{ fontSize: 60 }} />
        <div className="search equal-beetween">
          <SearchRoundedIcon />
          <input type="text" name="search" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="middle-nav row">
        <HomeRoundedIcon />
        <GroupRoundedIcon />
        <StoreRoundedIcon />
      </div>
      <div className="nav-right row">
        <WidgetsRoundedIcon />
        <CircleNotificationsRoundedIcon />
      </div>
    </div>
  );
}
