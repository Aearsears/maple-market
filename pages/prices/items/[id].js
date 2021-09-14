import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../../../components/navbar';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Head from 'next/head';
import Link from 'next/link';
import ItemCard from '../../../components/itemCard';
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

function ItemPricePage(props) {
    let graph;
    let check = Object.keys(props.pricedata).length;
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
    } else {
        graph = <div>No price data</div>;
    }
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
                                    'http://localhost:4000/api/item/' +
                                    props.itemdata.id +
                                    '/img'
                                }
                                alt={props.name}
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className="itemdatadiv m-2 ">
                            <Typography variant="h4">
                                {props.itemdata.name}
                            </Typography>
                            <div className="flex pricedata">
                                <Typography variant="h6">
                                    {props.itemdata.price} Mesos&nbsp;&nbsp;
                                </Typography>
                                <Typography
                                    variant="h6"
                                    className={
                                        props.itemdata.pchange > 0
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }
                                >
                                    {props.itemdata.pchange}(
                                    {(
                                        (props.itemdata.pchange /
                                            props.itemdata.price) *
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
                    <Typography className='text-center'>Active Price Suggestions</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        User
                                    </TableCell>
                                    <TableCell align="right">
                                        Suggested Price
                                    </TableCell>
                                    <TableCell align="right">
                                        Date
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { Object.keys(props.suggestiondata).length>0 ? (
                                
                                props.suggestiondata.map((row,index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {row.username}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.suggested_price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.submittedOn}
                                        </TableCell>
                                    </TableRow>
                                ))):
                                (<TableRow>
                                    <TableCell>
                                        No price suggestions. Why not be the first one?
                                    </TableCell>
                                    </TableRow>)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(
        `http://localhost:4000/api/item/${context.params.id}`
    );
    const itemdata = await res.json();

    const res2 = await fetch(
        `http://localhost:4000/api/item/${context.params.id}/pricehist`
    );
    const pricedata = await res2.json();

    const res3 = await fetch(
        `http://localhost:4000/api/item/${context.params.id}/pricesuggestion`
    );
    const suggestiondata = await res3.json();
    //if item's data does not exist throw a 404
    if (!itemdata) {
        return {
            notFound: true,
        };
    }

    return {
        props: { itemdata, pricedata,suggestiondata }, // will be passed to the page component as props
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
