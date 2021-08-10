import React from "react";
import Image from "next/image";
import pic from "../public/butterfly.png";

function Item(props) {
    return <Image src={pic} alt="test" width={500} height={500} />;
}

class Recentpricechange extends React.Component {
    render(props) {
        return (
            <div>
                <h1>Recent Price Changes</h1>
                <div className="place-content-center place-items-center justify-items-center flex">
                    {this.props.items.map((item, index) => (
                        <div key={"0" + index}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <Image
                                src={
                                    "http://localhost:4000/api/img/" +
                                    item.price
                                }
                                alt="test"
                                width={16}
                                height={16}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Recentpricechange;
