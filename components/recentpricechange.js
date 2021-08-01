import React from "react"
import Image from 'next/image'
import pic from '../public/butterfly.png'

function Item(props) {
    return (
        <Image
            src={pic}
            alt="test"
            width={500}
            height={500}
        />
    );
};

class Recentpricechange extends React.Component {

    render(props) {
        return (
            <div>
                <h1>Recent Price Changes</h1>
                <div><Image
                    src={pic}
                    alt="test"
                    width={100}
                    height={100}
                /> </div>
                <h1>test!

                    {this.props.items.map((item) => 
                    <div key="item.name">
                    <p >
                        {item.name}
                    </p>
                    <p >
                        {item.price}
                    </p>
                    <p >
                        {item.img_path}
                    </p>
                    <Image
                    src={"http://localhost:4000/api/img/"+item.price}
                    alt="test"
                    width={100}
                    height={100}
                    /> 
                    </div>
                    )
                    
                    }

                </h1>
            </div>
        );
    };
};

export default Recentpricechange;