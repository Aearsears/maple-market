import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Datagrid from '../../../components/datagrid';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

class Items extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    render () {
        return <div>Loading...</div>;
    }
}

export default Items;
