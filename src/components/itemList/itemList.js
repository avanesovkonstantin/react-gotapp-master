import React, { Component } from 'react';
import './itemList.css';
import GotService from '../services/gotService';
import Spinner from 'reactstrap/lib/Spinner';
export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charlist: null,
        selectedChar: null
    }

    componentDidMount() {
        const page = Math.floor(Math.random() * (100 - 40) + 40);
        this.gotService.getCharacters(page)
            .then((data) => {
                this.setState(({ charlist }) => {
                    return {
                        charlist: data
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderItems(charlist) {
        return charlist.map((item) => {
            const i = item.url.replace('https://anapioficeandfire.com/api/characters/', '');
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(i)}>
                    {item.name}
                </li>
            )
        })

    }

    render() {

        const { charlist } = this.state;

        if (!charlist) {
            return <Spinner></Spinner>
        }

        return (
            <ul className="item-list list-group">
                {this.renderItems(charlist)}
            </ul>
        );
    }
}