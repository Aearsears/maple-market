import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Image from 'next/image';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

class PriceSuggCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upVoteClicked: false,
            downVoteClicked: false,
            hasError: false,
        };
    }

    onClickUpVote = (event) => {
        const clicked = this.state.upVoteClicked;
        if (this.state.downVoteClicked) {
            return;
        }
        // TODO: track user's votes
        // make the post request to the db to change the post count
        const info = {suggId:this.props.suggid, itemId:this.props.itemid,type:"upvote"};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info,null,2),
        };
        fetch('https://maple-market-db.herokuapp.com/api/item/'+this.props.suggid+'/pricesuggestionvote', requestOptions)
            .then(async (response) => {
                const sta = response.status;
                if (sta === 200) {
                    this.setState({ upVoteClicked: !clicked });
                    event.preventDefault();
                    return;
                } 
                else {
                    const err = await response.text();
                    return Promise.reject(err);
                }
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    };

    onClickDownVote = (event) => {
        const clicked = this.state.downVoteClicked;
        if (this.state.upVoteClicked) {
            return;
        }
        this.setState({ downVoteClicked: !clicked });
        event.preventDefault();
    };

    render(props) {
        let card = (
            <Card className="bg-white flex w-full">
                <CardContent className="votingArrows">
                    <div className="h-full items-center justify-center flex">
                        <ArrowUpwardIcon
                            className={
                                !this.state.upVoteClicked
                                    ? 'fill-current text-gray-600 cursor-pointer'
                                    : 'fill-current text-green-600 cursor-pointer'
                            }
                            onClick={this.onClickUpVote}
                        />
                        <p>{this.props.upvotes + this.props.downvotes || 0}</p>
                        <ArrowDownwardIcon
                            className={
                                !this.state.downVoteClicked
                                    ? 'fill-current text-gray-600 cursor-pointer'
                                    : 'fill-current text-red-600 cursor-pointer'
                            }
                            onClick={this.onClickDownVote}
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
                            <ArrowUpwardIcon className="fill-current text-green-600" />
                        ) : (
                            <ArrowDownwardIcon className="fill-current text-red-600" />
                        )}{' '}
                        {this.props.pchange}
                    </Typography>
                </CardContent>
            </Card>
        );

        // let link = `/prices/items/${encodeURIComponent(this.props.id)}`;

        // const linkprops = {
        //     href: link,
        //     onClick: this.onClick,
        // };

        return (
            // <Link {...linkprops} passHref>
            card
            // {/* </Link> */}
        );
    }
}

export default PriceSuggCard;
