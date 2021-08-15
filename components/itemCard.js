import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Image from "next/image";

const useStyles = (theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: [],
        };
    }

    render(props) {
        return (
            <Card className="test">
                <CardContent>
                    <Typography variant="body2" component="h6">
                        {this.props.name}
                    </Typography>
                    <Typography className="typo" color="textSecondary">
                        {this.props.price}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Image
                            src={"http://localhost:4000/api/img/" + this.props.imgSrc}
                            alt={this.props.name}
                            width={16}
                            height={16}
                        />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}

export default ItemCard;
