import React from "react";
import Image from "next/image";
import ItemCard from "./itemCard";
import Typography from "@material-ui/core/Typography";

class Popularitems extends React.Component {
  render(props) {
    return (
      <div>
        <Typography
          variant="h6"
          id="Title"
          component="div"
          className="text-center"
        >
          Popular Items
        </Typography>
        <div className="place-content-center place-items-center justify-items-center flex">
          {this.props.items.map((item, index) => (
            <div key={"0" + index}>
              <ItemCard
                name={item.name}
                price={item.price}
                imgSrc={item.imgSrc}
                pchange={item.pchange}
              />
            </div>
          ))}
          {/* {this.props.items.map((item, index) => (
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
                              ))} */}
        </div>
      </div>
    );
  }
}

export default Popularitems;
