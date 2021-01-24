const { Component } = require("react")

import React { Component } from 'react';
import { elementals } from './data';


class Element extends Component {
    state = {
        hover: false
    }

    openInfo = (event) => {
        this.props.showInfo(this.props.num);
    }

    onMouseEnter = (event) => {
        this.setState({ hover: true });
    };

    onMouseLeave = (event) => {
        this.setState({ hover: false })
    }
}