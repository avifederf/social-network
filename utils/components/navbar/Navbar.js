"use client";
import "./navbar.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Home,
  OndemandVideo,
  People,
  SmartButton,
  Storefront,
} from "@mui/icons-material";
import { useState } from "react";

export default function Navbar() {
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab
            icon={
              <HomeRoundedIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              />
            }
          />
          <Tab
            icon={
              <GroupOutlinedIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              />
            }
          />
          <Tab
            icon={
              <SubscriptionsTwoToneIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              />
            }
          />
          <Tab
            icon={
              <StoreRoundedIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              />
            }
          />
          <Tab
            icon={
              <SportsEsportsTwoToneIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              />
            }
          />
        </Tabs>
      </div>
      <div className="nav-right row">
        <WidgetsRoundedIcon sx={{ fontSize: 40 }} />
        <MessageTwoToneIcon sx={{ fontSize: 40 }} />
        <CircleNotificationsRoundedIcon sx={{ fontSize: 40 }} />
        <button className="profile-button">
          <img
            src="/125371365_692859425274779_4351217660566881911_n.jpg"
            alt="Profile"
          />
          <div className="profile-overlay">
            <BsArrowDownCircleFill />
          </div>
        </button>
      </div>
    </div>
  );
}
