import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const SubmitPage = (props) => {
    const [hasSent] = useState(null);

    useEffect(() => {
        const status = submitSugg();
        if (status === 200) {
            hasSent = true;
        }
        else {
            hasSent = false;
        }
    });

    submitSugg = () => {
        // send the post request
        // console.log(this.state.details);
        // console.log(this.state.suggPrice);
        const one = props.values.details;
        const two = props.values.suggPrice;
        const three = props.values.item.props.id;
        const four = props.user.id;
        const body = {
            details: one,
            suggPrice: two,
            itemId: three,
            submittedOn: Date(),
            user_id: four,
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body, null, 2),
            credentials: 'include',
        };

        fetch(
            'https://maple-market-db.herokuapp.com/api/item/pricesuggestion',
            requestOptions
        )
            .then(async (response) => {
                const data = await response.status;

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                return data;
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    };

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
                {' '}
                Welcome to MapleMarket!{' '}
            </h1>
            <div>
                {hasSent
                    ? 'Price suggestion created'
                    : 'Something went wrong, please try again.'}
            </div>
            <Footer />
        </div>
    );
};

export default SubmitPage;
