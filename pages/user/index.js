import React from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const UserPage = (props) => {
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
            <h1>{this.props.userdata.username}</h1>
            <Footer />
        </div>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`https://maple-market-db.herokuapp.com/user`);
    const userdata = await res.json();

    if (!userdata) {
        return {
            notFound: true,
        };
    }

    return {
        props: { userdata }, // will be passed to the page component as props
    };
}

export default UserPage;
