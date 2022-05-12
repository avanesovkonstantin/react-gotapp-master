import React, { Component } from 'react';
import './randomChar.css';
import GotService from '../services/gotService';
import Spinner from '../spinners/spinner';
import ErrorMessage from '../errors/errorMessage';

export default class RandomChar extends Component {

    state = {
        randomChar: {
            name: "",
            gender: "",
            culture: "",
            born: "",
            died: ""
        },
        loading: true,
        error: false
    }

    componentDidMount() {
        this.timerid = setInterval(this.getRandomCharacter, 4000);
        this.getRandomCharacter();
    }
    componentWillUnmount() {
        clearInterval(this.timerid);
    }

    getRandomCharacter = () => {
        const got = new GotService();
        const id = Math.floor(Math.random() * (100 - 40) + 40);
        got.getCharacterById(id)
            .then((data) => {
                this.setState(() => {
                    return {
                        randomChar: {
                            name: data.name,
                            gender: data.gender,
                            culture: data.culture,
                            born: data.born,
                            died: data.died
                        },
                        loading: false,
                        error: false
                    }
                });
            })
            .catch((err) => {
                this.setState(() => {
                    return {
                        error: true,
                        loading: false
                    }
                })
            });

    }

    render() {
        const { randomChar, loading, error } = this.state;

        let content = <View char={randomChar}></View>;

        if (error) {
            content = <ErrorMessage></ErrorMessage>
        } else if (loading) {
            content = <Spinner></Spinner>
        }

        return (
            <div className="random-block rounded">
                {content}
            </div>
        );
    }
}

const View = ({ char }) => {

    const { name, gender, culture, born, died } = char;

    return (
        <>
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        </>
    )

}