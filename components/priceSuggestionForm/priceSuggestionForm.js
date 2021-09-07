import React, { useState, useEffect } from "react";
import ItemGrid from "../itemgrid";
import ItemCard from "../itemCard";
import { Button, TextField } from "@material-ui/core";
import "tailwindcss/tailwind.css";
import ChooseItem from "./chooseItem";
import ProvideDetails from "./provideDetails";

//first step choose your item
//second step fill in details, price, proof(pictures?) and submit
// if on item info page, and click make a suggestion, should already select the item and go to step 2 of the "form"

class PriceSuggestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            error: null,
            isLoaded: false,
            items: [],
            item: {},
            details: "",
            suggPrice: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    prevStep = () => {
        const step = this.state.step;
        this.setState({ step: step - 1 });
    };
    nextStep = () => {
        const step = this.state.step;
        this.setState({ step: step + 1 });
    };
    submitSugg = () => {
        // send the post request
        // console.log(this.state.details);
        // console.log(this.state.suggPrice);
        const one = this.state.details;
        const two = this.state.suggPrice;
        const body = { "details": one, "suggPrice":two };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body, null, 2),
        };
        fetch("https://maplemarket.herokuapp.com/api/item/pricesuggestion", requestOptions)
            .then(async (response) => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
        this.nextStep();
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        this.setState({ [name]: value });
    }

    handleItemChange(event) {
        this.nextStep();
        this.setState({ item: event });
    }

    render(props) {
        const { step } = this.state;
        const { item, details, suggPrice } = this.state;
        const values = { item, details, suggPrice };
        switch (step) {
            case 0:
                return (
                    <div>
                        step 0
                        <ChooseItem
                            items={this.props.items}
                            nextStep={this.nextStep}
                            handleItemChange={this.handleItemChange}
                        />
                    </div>
                );
            case 1:
                return (
                    <ProvideDetails
                        values={values}
                        submitSugg={this.submitSugg}
                        handleChange={this.handleChange}
                        prevStep={this.prevStep}
                    />
                );
            default:
                return <div>Submitted!</div>;
        }
    }
}

export default PriceSuggestionForm;
