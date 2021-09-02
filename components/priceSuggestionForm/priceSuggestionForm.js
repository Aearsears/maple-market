import React, { useState, useEffect } from "react";
import ItemGrid from "../itemgrid";
import ItemCard from "../itemCard";
import { Button,TextField } from "@material-ui/core";
import "tailwindcss/tailwind.css";
import ChooseItem from "./chooseItem";

//first step choose your item
//second step fill in details, price, proof(pictures?) and submit

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

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleItemChange(event) {
        // console.log(event);
        // console.log(event.currentTarget.itemName);
        // console.log(this.props);
        // const target = event.currentTarget;
        // const value = target.value;
        // const name = target.name;
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
                    <div>
                        step 1 : {values.item.props.itemName}
                        <ItemCard
                            id={values.item.props.id}
                            itemName={values.item.props.name}
                            price={values.item.props.price}
                            imgSrc={values.item.props.imgSrc}
                            pchange={values.item.props.pchange}
                            type={"none"}
                        />
                        <TextField
                            placeholder="Email Address"
                            label="Email Address"
                            // onChange={this.handleChange("email")}
                            defaultValue={values.details}
                            // variant="outlined"
                            autoComplete="email"
                            fullWidth
                        />
                        <TextField
                            placeholder="Username"
                            label="Username"
                            // onChange={this.handleChange("username")}
                            defaultValue={values.suggPrice}
                            // variant="outlined"
                            autoComplete="username"
                            fullWidth
                        />
                        <Button
                            onClick={this.nextStep}
                            variant="contained"
                            color="primary"
                        >
                            next step
                        </Button>
                        <Button
                            onClick={this.prevStep}
                            variant="contained"
                            color="primary"
                        >
                            prev step
                        </Button>
                    </div>
                );
            default:
                return <div>Something went wrong...</div>;
        }
    }
}

export default PriceSuggestionForm;
