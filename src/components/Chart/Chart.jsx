import './Chart.css';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';

const data = [
    {
        name: 'Jan',
        "Active Users": 4000,
    },
    {
        name: 'Feb',
        "Active Users": 3000,
    },
    {
        name: 'Mar',
        "Active Users": 5000,
    },
    {
        name: 'Apr',
        "Active Users": 4000,
    },
    {
        name: 'May',
        "Active Users": 3000,
    },
    {
        name: 'Jun',
        "Active Users": 2000,
    },
    {
        name: 'Jul',
        "Active Users": 4000,
    },
    {
        name: 'Aug',
        "Active Users": 3000,
    },
    {
        name: 'Sep',
        "Active Users": 4000,
    },
    {
        name: 'Oct',
        "Active Users": 1000,
    },
    {
        name: 'Nov',
        "Active Users": 4000,
    },
    {
        name: 'Dec',
        "Active Users": 3000,
    },
];


function Chart() {
    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytics</h3>
            {/* if the width is 4 units, then the height will be 1 unit */}
            {/* if the width is 400px, then the height will be 100px */}
            <ResponsiveContainer width={"100%"} aspect={4 /1}>
                <LineChart data={data}>
                    <XAxis dataKey={"name"} stroke="#5550bd" />
                    <Line type="monotone" dataKey="Active Users" stroke="#5550bd" />
                    <Tooltip />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                    {/* <Legend /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
