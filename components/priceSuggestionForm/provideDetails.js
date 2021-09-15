import React from 'react';
import { Button, TextField } from '@material-ui/core';
import 'tailwindcss/tailwind.css';
import ItemCard from '../itemCard';

// first step choose your item
// second step fill in details, price, proof(pictures?) and submit

class ProvideDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            step: 0,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    render (props) {
        return (
            <div>
                <Button
                    onClick={this.props.prevStep}
                    variant="contained"
                    color="primary"
                >
                    Previous Step
                </Button>
                <div>{this.props.values.item.props.itemName}</div>
                <div className="place-content-start place-items-center justify-items-center flex">
                    <ItemCard
                        id={this.props.values.item.props.id}
                        itemName={this.props.values.item.props.name}
                        price={this.props.values.item.props.price}
                        imgSrc={this.props.values.item.props.imgSrc}
                        pchange={this.props.values.item.props.pchange}
                        type={'suggestion'}
                    />
                    <TextField
                        placeholder="Enter in the suggested price"
                        label="Suggested price"
                        id="suggPrice"
                        value={this.props.values.submitSugg}
                        onChange={(event) => this.props.handleChange(event)}
                        // variant="outlined"
                        // autoComplete="username"
                    />
                    <TextField
                        placeholder="Enter in your details..."
                        label="Details"
                        id="details"
                        multiline
                        rows={4}
                        value={this.props.values.details}
                        onChange={(event) => this.props.handleChange(event)}
                        // variant="outlined"
                        // autoComplete="email"
                    />
                </div>
                <Button
                    onClick={this.props.submitSugg}
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </div>
        );
    }
}

export default ProvideDetails;
