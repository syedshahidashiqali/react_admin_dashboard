import "./Home.css";
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import {usersData} from "../../components/Chart/dummyData";
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
        </div>
    )
}

export default Home;
