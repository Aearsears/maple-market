import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Datagrid from "../components/datagrid";
import pic from '../public/butterfly.png';

function Welcome() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('http://localhost:4000/api/test', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson);
            })
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Header />
            <Navbar />
            <h1 className="text-center"> Title </h1>
            <Datagrid data = {data}/>
            <Footer />
        </div>
    );
}

export default Welcome;