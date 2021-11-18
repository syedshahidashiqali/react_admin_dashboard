import React from 'react';
import "./SideBar.css";

import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';

function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                        <a href="/" className="link">
                            <li className="sideBarListItem active">
                                <LineStyleIcon className="sideBarIcon" />
                                Home
                            </li>
                        </a>
                        <li className="sideBarListItem">
                            <TimelineIcon className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUpIcon className="sideBarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sideBarList">
                        <a href="/users" className="link">
                            <li className="sideBarListItem">
                                <PersonOutlineOutlinedIcon className="sideBarIcon" />
                                Users
                            </li>
                        </a>
                        <a href="/products" className="link">
                            <li className="sideBarListItem">
                                <StorefrontOutlinedIcon className="sideBarIcon" />
                                Products
                            </li>
                        </a>
                        <li className="sideBarListItem">
                            <AttachMoneyOutlinedIcon className="sideBarIcon" />
                            Transactions
                        </li>
                        <li className="sideBarListItem">
                            <BarChartOutlinedIcon className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <MailOutlineOutlinedIcon className="sideBarIcon" />
                            Mail
                        </li>
                        <li className="sideBarListItem">
                            <DynamicFeedOutlinedIcon className="sideBarIcon" />
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            <ChatBubbleOutlineOutlinedIcon className="sideBarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sideBarList">
                        <li className="sideBarListItem">
                            <WorkOutlineOutlinedIcon className="sideBarIcon" />
                            Manage
                        </li>
                        <li className="sideBarListItem">
                            <TimelineIcon className="sideBarIcon" />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <NewReleasesOutlinedIcon className="sideBarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
