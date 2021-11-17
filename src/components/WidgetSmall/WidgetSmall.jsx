import "./WidgetSmall.css";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">
                New Join Members
            </span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img className="widgetSmallItemImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna keller</span>
                        <span className="widgetSmallUserRole">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img className="widgetSmallItemImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna keller</span>
                        <span className="widgetSmallUserRole">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img className="widgetSmallItemImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna keller</span>
                        <span className="widgetSmallUserRole">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img className="widgetSmallItemImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna keller</span>
                        <span className="widgetSmallUserRole">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img className="widgetSmallItemImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna keller</span>
                        <span className="widgetSmallUserRole">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityOutlinedIcon className="widgetSmallIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSmall;