import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Datagrid from "../components/datagrid";

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }
    componentDidMount() {
        fetch("http://localhost:4000/api/test", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(response=>response.json()) // RETURN RESPONSE.JSON()
            .then(
                data=> {
                    this.setState({
                        isLoaded: true,
                        items: data,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error:{error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Header />
                    <Navbar />
                    <h1 className="text-center"> Title </h1>
                    <Datagrid data={items} />
                    <Footer />
                </div>
            );
        }
    }
}

export default WelcomePage;
