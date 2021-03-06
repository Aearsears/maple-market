import React from 'react';
import 'tailwindcss/tailwind.css';
import ChooseItem from './chooseItem';
import ProvideDetails from './provideDetails';

// first step choose your item
// second step fill in details, price, proof(pictures?) and submit
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
            details: '',
            suggPrice: '',
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
        const three = this.state.item.props.id;
        const four = this.props.user.id;
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
            })
            .catch((error) => {
                console.error('There was an error!', error);
                this.nextStep();
                this.nextStep();
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
        console.log(event);
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
        case 2: return(
            <div>Price suggestion successfully created!</div>
        );
        default:
            return <div>There was an error.</div>;
        }
    }
}

export default PriceSuggestionForm;
