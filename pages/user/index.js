import React from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

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
                {' '}
                Welcome to MapleMarket!{' '}
            </h1>
            <h1>{props.userdata.username}</h1>
            <Footer />
        </div>
    );
};

export async function getServerSideProps(context) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            cookie: context.req.headers.cookie,
        },
        credentials: 'include',
    };
    // const cookies = context.req.headers.cookie;
    // console.log(cookies);
    const res = await fetch(
        'https://maple-market-db.herokuapp.com/user',
        requestOptions
    );
    const st = res.status;
    // console.log('RESPONSE FROM FRONT END: ');
    // console.log(userdata);

    if (st===500) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
    const userdata = await res.json();
    return {
        props: { userdata }, // will be passed to the page component as props
    };
}

export default UserPage;
