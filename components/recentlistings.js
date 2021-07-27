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

class Recentlistings extends React.Component {

    render(props) {
        return (
            <div>
                <h1>Recent Listings</h1>
                <div><Image
                    src={pic}
                    alt="test"
                    width={100}
                    height={100}
                /> </div>
            </div>
        );
    };
};

export default Recentlistings
;