import React from "react"

class Popularitems extends React.Component {
    render() {
        return (
            <div>
               <h2>Most Popular Items</h2>
            <div className="grid grid-cols-3 gap-2 place-items-center h-48">
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </div>
            </div>
        );
    };
};

export default Popularitems;