import React, { Component } from 'react';
import './itemDetails.css';
import GotService from '../services/gotService';
import Spinner from 'reactstrap/lib/Spinner';

export default class ItemDetails extends Component {

    state = {
        item: null
    }

    onCharUpdate = (item) => {
        this.setState({ item })
    }

    componentDidUpdate(preProps) {

        if (!this.props.selectedItemId) {

            return
        }

        if (this.props.selectedItemId === preProps.selectedItemId) {
            return;
        }

        this.getDataById(this.props.selectedItemId)

    }

    componentDidMount() {
        if (!this.props.selectedItemId) {
            return
        }
        this.getDataById(this.props.selectedItemId)
    }

    getDataById = (Id) => {

        const got = new GotService();

        got[this.props.getDataFunctionName](Id)
            .then((item) => {
                this.setState({ item })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        if (!this.state.item) {
            return (
                <div className="random-block rounded">
                    <span>Select a character...</span>
                    <Spinner></Spinner>
                </div>
            )
        }

        const { item } = this.state;
        const { name } = item;

        return (
            <div className="item-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}