import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ItemGrid from '../../components/itemgrid';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

class Prices extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount () {
        fetch('https://maple-market-db.herokuapp.com/test', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            }) // RETURN RESPONSE.JSON()
            .then(
                (data) => {
                    // console.log(typeof data);
                    this.setState({
                        isLoaded: true,
                        items: Object.values(data)
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render () {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error:{error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="h-screen">
                    <Head>
                        <title>Maple Market</title>
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        ></meta>
                        <meta
                            name="description"
                            content="Prices for Maplestory"
                        ></meta>
                        <meta
                            name="keywords"
                            content="Maplestory, GMS, EMS"
                        ></meta>
                        <meta charset="UTF-8"></meta>
                    </Head>
                    <Header />
                    <Navbar />
                    <h1 className="text-center py-2 bg-Artichoke">
                        {' '}
                        Welcome to MapleMarket!{' '}
                    </h1>
                    <ItemGrid
                        items={items}
                        title={
                            'CHSNGE THIS TO HAVE CARDS OF EACH TYPE OF ITEM IN MAPLESOTRY, ETC, USE, CASH, EQUIPS'
                        }
                        type={'prices'}
                    />
                    <Footer />
                </div>
            );
        }
    }
}

export default Prices;
