import React from 'react';
import ItemGrid from '../itemgrid';
import 'tailwindcss/tailwind.css';

// first step choose your item
// second step fill in details, price, proof(pictures?) and submit

class ChooseItem extends React.Component {
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
                <div>Choose an item</div>
                <ItemGrid
                    items={this.props.items}
                    title={'All items'}
                    type={'suggestion'}
                    handleItemChange={this.props.handleItemChange}
                />
            </div>
        );
    }
}

export default ChooseItem;
