import "./Home.css";
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import {usersData} from "../../components/Chart/dummyData";
import WidgetSmall from "../../components/WidgetSmall/WidgetSmall";
import WidgetLarge from "../../components/WidgetLarge/WidgetLarge";

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart 
                data={usersData} 
                title="User Analytics" 
                dataKey="Active Users"
                grid
            />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home;
