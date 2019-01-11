import React, { Component } from "react";
import { Button } from "../../elements";

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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3>Elements</h3>
                    </div>
                    <div className="col-12">
                        <Button title="Some button" type="Button" className="btn-primary" />
                    </div>
                </div>
            </div>
        );
    }
}