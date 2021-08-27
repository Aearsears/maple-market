import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Image from "next/image";
import ButtonBase from "@material-ui/core/ButtonBase";
import Link from "next/link";

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [],
    };
  }

  render(props) {
    return (
      <Link
        href={`/prices/items/${encodeURIComponent(this.props.id)}`}
        passHref
      >
        <Card
          className={this.props.pchange > 0 ? "bg-green-300" : "bg-red-300"}
        >
          <ButtonBase className="h-full w-full">
            <CardContent className="h-full w-full">
              {/* <Typography variant="body2" component="h6">
                        {this.props.name}
                    </Typography>
                    <Typography className="typo" color="textSecondary">
                        {this.props.price}
                    </Typography> */}
              <Image
                src={"http://localhost:4000/api/img/" + this.props.id}
                alt={this.props.name}
                width={64}
                height={64}
              />
            </CardContent>
          </ButtonBase>

          <CardContent className="cursor-pointer">
            <Typography variant="subtitle1" align="center">
              {this.props.pchange > 0 ? "↑" : "↓"} {this.props.pchange}{" "}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    );
  }
}

export default ItemCard;
