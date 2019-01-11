import React, { Component } from "react";
import propTypes from 'prop-types';
import classnames from 'classnames';

export class Button extends Component {

    classNames = (e) => {
        return classnames('btn', [e]);
    };

    render() {
        const {title, type, onClick, className} = this.props;
        return (
            <button type={type} onClick={onClick} className={this.classNames(className)}>{title}</button>
        );
    }
}
Button.propTypes = {
    title: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    onClick: propTypes.func,
    className: propTypes.array,
};