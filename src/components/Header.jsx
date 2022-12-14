import { useState } from "react";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  PersonAdd as PersonAddIcon,
  NotificationsNone as NotificationsNoneIcon,
} from "@mui/icons-material";
import "../Style/header.css";

export default function Header({ setOpenSlider }) {
  const [isOpen, setIsOpen] = useState(false);

  const openProfile = () => {
    setIsOpen((current) => !current);
  };

  const sidebarHandler = () => {
    setOpenSlider((prev) => !prev);
  };

  const profileDetails = [
    "Dark Mode",
    "Profile",
    "What's New",
    "Help",
    "Send feedback",
    "Hints and Shortcuts",
    "Logout",
  ];

  return (
    <div className="header-container">
      <div className="hamburgur-input-container">
        <div className="hamburgur-icon">
          <button className="menu-btn">
            <MenuIcon onClick={sidebarHandler} fontSize="large" />
            <div className="tooltip">Menu</div>
          </button>
        </div>
        <div className="input-box-container">
          <div className="search-btn">
            <SearchIcon fontSize="large" />
          </div>
          <div className="input-btn">
            <input className="input" placeholder="Search here" />
          </div>
        </div>
      </div>
      <div className="share-notification-container">
        <div className="share-btn-container">
          <button className="share-btn">
            <PersonAddIcon />
            Invite Team Member
          </button>
        </div>
        <div>
          <button className="notification-btn">
            <NotificationsNoneIcon fontSize="large" />
            <div className="tooltip">Notifications</div>
          </button>
        </div>
        <div className="profile">
          <button className="profile-btn" onClick={openProfile}>
            D
          </button>
          {isOpen && (
            <div className="dropdown">
              {profileDetails.map((details) => (
                <button className="darkmode-btn">{details}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
