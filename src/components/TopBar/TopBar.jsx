import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import "./TopBar.css";

function TopBar() {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin_Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topBarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="iconCount">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <LanguageIcon />
                        <span className="iconCount">4</span>
                    </div><div className="topBarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img className="topAvatar" src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="sample" />
                </div>
            </div>
        </div>
    )
}

export default TopBar;
