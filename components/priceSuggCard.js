import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Image from 'next/image';
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Link from 'next/link';

class PriceSuggCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: [],
            hasError: false,
        };
    }

    onClick = (event) => {
        alert('this works');
        event.preventDefault();
    };

    render(props) {
        let card = (
            <Card className="bg-white flex w-full">
                <CardContent className="votingArrows">
                    <div className="h-full items-center justify-center flex">
                        <ArrowUpwardIcon
                            className="fill-current text-gray-600 cursor-pointer"
                            onClick={this.onClick}
                        />
                        <p>{(this.upvotes+this.downvotes) || 0}</p>
                        <ArrowDownwardIcon
                            className="fill-current text-gray-600 cursor-pointer"
                            onClick={this.onClick}
                        />
                    </div>
                </CardContent>

                <CardContent className="flex w-full h-full">
                    <CardContent>
                        <CardContent className="p-0">
                            <Typography>{this.props.itemname}</Typography>
                            <Typography>
                                Submitted on&nbsp;
                                {this.props.submittedOn} by&nbsp;
                                {this.props.username}
                            </Typography>
                            <Typography>
                                Updated on&nbsp;
                                {this.props.updatedOn} by&nbsp;
                                {this.props.username}
                            </Typography>
                            <div className="inline-flex items-center">
                                <div className="bg-gray-500 rounded-lg p-2 text-white	">
                                    {this.props.price}
                                </div>
                                <KeyboardArrowRightIcon className="fill-current text-gray-500" />
                                <div className="bg-blue-500 rounded-lg p-2 text-white	">
                                    {this.props.suggested_price}
                                </div>
                            </div>
                        </CardContent>
                    </CardContent>
                    <CardContent>
                        <Image
                            src={
                                'https://maple-market-db.herokuapp.com/api/item/' +
                                this.props.itemid +
                                '/img'
                            }
                            alt={this.props.name}
                            width={64}
                            height={64}
                        />
                    </CardContent>
                </CardContent>

                <CardContent className="cursor-pointer">
                    <Typography variant="subtitle1" align="center">
                        {this.props.pchange > 0 ? (
                            <ArrowUpwardIcon className="fill-current text-gray-600" />
                        ) : (
                            <ArrowDownwardIcon className="fill-current text-gray-600" />
                        )}{' '}
                        {this.props.pchange}
                    </Typography>
                </CardContent>
            </Card>
        );

        let link = `/prices/items/${encodeURIComponent(this.props.id)}`;

        const linkprops = {
            href: link,
            onClick: this.onClick,
        };

        return (
            <Link {...linkprops} passHref>
                {card}
            </Link>
        );
    }
}

export default PriceSuggCard;
