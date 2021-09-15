import React from 'react';
import 'tailwindcss/tailwind.css';
import ChooseItem from './chooseItem';
import ProvideDetails from './provideDetails';
import SubmitPage from './submitPage';

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
        case 2:
            return <SubmitPage values={values} user={this.props.userdata}></SubmitPage>;
        default:
            return <div>There was an error.</div>;
        }
    }
}

export default PriceSuggestionForm;
