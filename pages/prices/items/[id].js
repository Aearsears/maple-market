import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Button from "@material-ui/core/Button";
import Head from "next/head";
import Link from "next/link";
import ItemCard from "../../../components/itemCard";
import Image from "next/image";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

function ItemPricePage(props) {
    const router = useRouter();
    let graph;
    let check = Object.keys(props.pricedata).length;
    // console.log("LOOK HERE:"+check);
    if (check > 0) {
        graph = (
            <div>
                <p>{props.pricedata[0].Date}</p>
                <p>{props.pricedata[0]["Adj Close"]}</p>
                <LineChart
                    width={1000}
                    height={300}
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
            <h1 className="text-center py-2 bg-Artichoke">
                {" "}
                Welcome to MapleMarket!{" "}
            </h1>

            <p>{props.itemdata.name}</p>
            <p>{props.itemdata.price} Mesos</p>
            <p>
                {props.itemdata.pchange} (
                {(
                    (props.itemdata.pchange / props.itemdata.price) *
                    100
                ).toFixed(2) + "%"}
                )
            </p>
            <Image
                src={
                    "http://localhost:4000/api/item/" +
                    props.itemdata.id +
                    "/img"
                }
                alt={props.name}
                width={64}
                height={64}
            />
            {graph}
            <Link href="/prices/suggestion" passHref>
            <Button
                variant="contained"
                className="bg-Artichoke"
                >
                Make a price suggestion
            </Button>
            </Link>

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

    if (!itemdata) {
        return {
            notFound: true,
        };
    }

    return {
        props: { itemdata, pricedata }, // will be passed to the page component as props
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
