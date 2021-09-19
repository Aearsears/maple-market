import React from 'react';
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
