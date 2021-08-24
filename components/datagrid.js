import React from "react"
import Mesomarket from "./mesomarket"
import Popularitems from "./popitems"
import Recentlistings from "./recentlistings"
import Recentpricechange from "./recentpricechange"


class Datagrid extends React.Component{
    render(){
        return(
            <div className="grid grid-cols-2 gap-2 place-items-center inline-block bg-Champagne-Pink h-screen">   
                <div>
                    <Mesomarket />
                </div>
                <div>
                    <Popularitems items={this.props.data} />
                </div>
                <div>
                    <Recentlistings />
                </div>
                <div><Recentpricechange items={this.props.data} /> </div>
            </div>
        );
    };
};

export default Datagrid;