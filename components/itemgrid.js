import React from "react";
import ItemCard from "./itemCard";
import Typography from "@material-ui/core/Typography";

class ItemGrid extends React.Component {
  render(props) {
    return (
      <div>
        <Typography variant="h6" id="Title" component="div" className="text-center">
          {this.props.title}
        </Typography>
        <div className="place-content-center place-items-center justify-items-center flex">
          {this.props.items.map((item, index) => (
            <div key={"0" + index}>
              <ItemCard
                id={item.id}
                name={item.name}
                price={item.price}
                imgSrc={item.imgSrc}
                pchange={item.pchange}
                type={this.props.type}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ItemGrid;
