import React, { Component } from 'react';
import './charDetails.css';
import GotService from '../services/gotService';
export default class CharDetails extends Component {

    state = {
        char: null
    }

    onCharUpdate = (char) => {
        this.setState({ char })
    }

    componentDidUpdate(preProps) {
       
        if (!this.props.selectedCharId) {
            return
        }

        if (this.props.selectedCharId === preProps.selectedCharId) {
            return; 
        }

        const got = new GotService();
        
        got.getCharacterById(this.props.selectedCharId)
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
                <span className="char-details rounded">select a char</span>
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