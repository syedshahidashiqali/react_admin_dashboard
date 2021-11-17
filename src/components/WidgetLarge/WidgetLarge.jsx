import "./WidgetLarge.css";

function WidgetLarge() {

    const Button = ({type}) => {
        return(
            <button className={"widgetLargeButton " + type}>{type}</button>
        )
    }
    return (
        <div className="widgetLarge">
            <span className="widgetLargeTitle">Latest Transactions</span>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTableTr">
                    <th className="widgetLargeTableTrTh">Customers</th>
                    <th className="widgetLargeTableTrTh">Date</th>
                    <th className="widgetLargeTableTrTh">Amount</th>
                    <th className="widgetLargeTableTrTh">Status</th>
                </tr>
                <tr className="widgetLargeTableTr">
                    <td className="widgetLargeTableTrTdUser">
                        <img className="widgetLargeTableTrTdUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <span className="widgetLargeTableTrTdUserName">Susan Carol</span>
                    </td>
                    <td className="widgetLargeTableTrTdDate">2 June 2021</td>
                    <td className="widgetLargeTableTrTdAmount">$122.00</td>
                    <td className="widgetLargeTableTrTdStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLargeTableTr">
                    <td className="widgetLargeTableTrTdUser">
                        <img className="widgetLargeTableTrTdUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <span className="widgetLargeTableTrTdUserName">Susan Carol</span>
                    </td>
                    <td className="widgetLargeTableTrTdDate">2 June 2021</td>
                    <td className="widgetLargeTableTrTdAmount">$122.00</td>
                    <td className="widgetLargeTableTrTdStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLargeTableTr">
                    <td className="widgetLargeTableTrTdUser">
                        <img className="widgetLargeTableTrTdUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <span className="widgetLargeTableTrTdUserName">Susan Carol</span>
                    </td>
                    <td className="widgetLargeTableTrTdDate">2 June 2021</td>
                    <td className="widgetLargeTableTrTdAmount">$122.00</td>
                    <td className="widgetLargeTableTrTdStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLargeTableTr">
                    <td className="widgetLargeTableTrTdUser">
                        <img className="widgetLargeTableTrTdUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <span className="widgetLargeTableTrTdUserName">Susan Carol</span>
                    </td>
                    <td className="widgetLargeTableTrTdDate">2 June 2021</td>
                    <td className="widgetLargeTableTrTdAmount">$122.00</td>
                    <td className="widgetLargeTableTrTdStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLarge;
