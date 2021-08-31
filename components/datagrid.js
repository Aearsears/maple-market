import React from "react"
import Mesomarket from "./mesomarket"
import Recentlistings from "./recentlistings"
import ItemGrid from "./itemgrid"

class Datagrid extends React.Component{
    render(){
        return(
            <div className="grid grid-cols-2 gap-2 place-items-center inline-block bg-Champagne-Pink h-screen">   
                <div>
                    <Mesomarket />
                </div>
                <div>
                    <ItemGrid items={this.props.data} title={"Popular Items"} />
                </div>
                <div>
                    <Recentlistings />
                </div>
                <div><ItemGrid items={this.props.data} title={"Recent Price Changes"} /> </div>
            </div>
        );
    };
};

export default Datagrid;