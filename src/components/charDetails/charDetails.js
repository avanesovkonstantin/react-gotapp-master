import React, { Component } from 'react';
import './charDetails.css';
import GotService from '../services/gotService';
import Spinner from 'reactstrap/lib/Spinner';
export default class CharDetails extends Component {

    state = {
        char: null
    }

    onCharUpdate = (char) => {
        this.setState({ char })
    }

    componentDidUpdate(preProps) {

        if (!this.props.selectedItemId) {
            return
        }

        if (this.props.selectedItemId === preProps.selectedItemId) {
            return;
        }

        this.getCharacterById(this.props.selectedItemId)

    }

    componentDidMount() {
        if (!this.props.selectedItemId) {
            return
        }
        this.getCharacterById(this.props.selectedItemId)
    }

    getCharacterById = (Id) => {

        const got = new GotService();

        got.getCharacterById(Id)
            .then((char) => {
                this.setState({ char })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        if (!this.state.char) {
            return (
                <div className="random-block rounded">
                    <span>Select a character...</span>
                    <Spinner></Spinner>
                </div>
            )
        }

        const { name, born, died, culture, gender } = this.state.char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}