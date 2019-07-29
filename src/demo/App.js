/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Mapbox_dash } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            label:''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <Mapbox_dash
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
