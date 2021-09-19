import React from 'react';
import Navbar from '../../../components/navbar';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import PriceSuggCard from '../../../components/priceSuggCard';

function ItemPricePage(props) {
    // console.log(props);
    let graph;
    const check = Object.keys(props.pricedata).length;
    // console.log("LOOK HERE:"+check);
    if (check > 0) {
        graph = (
            <div>
                <ResponsiveContainer width={'100%'} height={300}>
                    <LineChart
                        data={props.pricedata}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                        <Line
                            type="monotone"
                            dataKey="Adj Close"
                            stroke="#8884d8"
                            dot={false}
                        />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="Date" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <p>{props.pricedata[0].Date}</p>
                <p>{props.pricedata[0]['Adj Close']}</p>
            </div>
        );
    } 
    else {
        graph = <div>No price data</div>;
    }
    console.log(props.suggestiondata);
    return (
        <div className="h-screen">
            <Head>
                <title>Maple Market</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <meta name="description" content="Prices for Maplestory"></meta>
                <meta name="keywords" content="Maplestory, GMS, EMS"></meta>
                <meta charset="UTF-8"></meta>
            </Head>
            <Header />
            <Navbar />
            <div>
                <h1 className="text-center py-2 bg-Artichoke">
                    {' '}
                    Welcome to MapleMarket!{' '}
                </h1>
            </div>

            <div className="mainitemcontainer flex w-full">
                <div className="itemcontainer m-4 w-3/6">
                    <div className="iteminfo flex m-4">
                        <div className="itemimgdiv m-2">
                            <Image
                                src={
                                    'https://maple-market-db.herokuapp.com/api/item/' +
                                    props.itemdata[0].id +
                                    '/img'
                                }
                                alt={props.name}
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className="itemdatadiv m-2 ">
                            <Typography variant="h4">
                                {props.itemdata[0].name}
                            </Typography>
                            <div className="flex pricedata">
                                <Typography variant="h6">
                                    {props.itemdata[0].price} Mesos&nbsp;&nbsp;
                                </Typography>
                                <Typography
                                    variant="h6"
                                    className={
                                        props.itemdata[0].pchange > 0
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }
                                >
                                    {props.itemdata[0].pchange}(
                                    {(
                                        (props.itemdata[0].pchange /
                                            props.itemdata[0].price) *
                                        100
                                    ).toFixed(2) + '%'}
                                    )
                                </Typography>
                            </div>
                        </div>
                    </div>

                    {graph}
                    <Link href="/prices/suggestion" passHref>
                        <Button variant="contained" className="bg-Artichoke">
                            Make a price suggestion
                        </Button>
                    </Link>
                </div>

                <div className="pricesuggcontainer w-3/6">
                    <Typography className="text-center">
                        Active Price Suggestions
                    </Typography>
                    {/* The parenthesis are returning a single value, the curly braces are executing multiple lines of code. */}
                    {Object.keys(props.suggestiondata).length > 0 ? (
                        props.suggestiondata.map((item, index) => {
                            return <PriceSuggCard
                                key={index}
                                itemname={props.itemdata[0].name}
                                price={props.itemdata[0].price}
                                pchange={props.itemdata[0].pchange}
                                itemid={props.itemdata[0].id}
                                submittedOn={item.submittedon}
                                updatedOn={item.updatedon}
                                username={item.user}
                                suggested_price={item.suggested_price}
                                upvotes={item.upvotes}
                                downvotes={item.downvotes}
                            />;
                        })
                    ) : (
                        <div className="text-center">
                            There are no active price suggestions. Why not be
                            the first one?
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(
        `https://maple-market-db.herokuapp.com/api/item/${context.params.id}`
    );
    const itemdata = await res.json();

    const res2 = await fetch(
        `https://maple-market-db.herokuapp.com/api/item/${context.params.id}/pricehist`
    );
    const pricedata = await res2.json();

    const res3 = await fetch(
        `https://maple-market-db.herokuapp.com/api/item/${context.params.id}/pricesuggestion`
    );
    const suggestiondata = await res3.json();
    // if item's data does not exist throw a 404
    if (!itemdata) {
        return {
            notFound: true,
        };
    }

    return {
        props: { itemdata, pricedata, suggestiondata }, // will be passed to the page component as props
    };
}

// class ItemPricePage extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: {},
//         };
//     };
//     render(){
//         this.setState({
//             isLoaded:true,
//             items:{props.router}
//         })
//         return(

//             <p>{this.props.router.query.id}</p>

//         );
//     }
// };

export default ItemPricePage;
