import React, { Component } from "react";

export class App extends Component {

    /**
     * First step in life-CYCLE
     */
    constructor (props) {
        super(props);
        // this.state = {};
    }

    /**
     * But You can use STATE without constructor
     * ***
     * let's read about
     * @babel/plugin-proposal-class-properties
     * ***
     *
     * @type {{}}
     */
    state = {};

    render() {
        return (
            <div>
                <h1>My React App!</h1>
            </div>
        );
    }
}