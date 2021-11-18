import "./User.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import {Link} from "react-router-dom";

function User() {
    return (
        <div className="user">
            <div className="userHeaderContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="addUserButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className="userShowImg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowBottomHeaderTitle">Account Details</span>
                        <div className="userShowBottomInfo">
                            <PermIdentityIcon className="userShowBottomIcon" />
                            <span className="userShowBottomTitle">annabeck99</span>
                        </div>
                        <div className="userShowBottomInfo">
                            <CalendarTodayIcon className="userShowBottomIcon" />
                            <span className="userShowBottomTitle">10.12.1999</span>
                        </div>
                        <span className="userShowBottomHeaderTitle">Contact Details</span>
                        <div className="userShowBottomInfo">
                            <PhoneAndroidIcon className="userShowBottomIcon" />
                            <span className="userShowBottomTitle">+1 123 456 67</span>
                        </div>
                        <div className="userShowBottomInfo">
                            <MailOutlineIcon className="userShowBottomIcon" />
                            <span className="userShowBottomTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowBottomInfo">
                            <LocationSearchingIcon className="userShowBottomIcon" />
                            <span className="userShowBottomTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input className="userUpdateInput" type="text" placeholder="annabeck99" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Full Name</label>
                                <input className="userUpdateInput" type="text" placeholder="Anna Becker" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input className="userUpdateInput" type="text" placeholder="annabeck99@gmail.com" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input className="userUpdateInput" type="text" placeholder="+1 123 456 67" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input className="userUpdateInput" type="text" placeholder="New York | USA" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                                <label htmlFor="file">
                                    <PublishIcon className="userUpdateIcon" />
                                </label>
                                <input type="file" name="" id="file" />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
