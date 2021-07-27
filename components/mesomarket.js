import React from "react"

class Mesomarket extends React.Component {
    render() {
        return (
            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-c3ow" colSpan="2">Meso Market Rates</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tg-c3ow">Bera</td>
                        <td className="tg-c3ow">12.50%</td>
                    </tr>
                    <tr>
                        <td className="tg-c3ow">Scania</td>
                        <td className="tg-c3ow">11.78%</td>
                    </tr>
                    <tr>
                        <td className="tg-c3ow">Luna</td>
                        <td className="tg-c3ow">0.72%</td>
                    </tr>
                </tbody>
            </table>

        );
    };
};

export default Mesomarket;