import React, { Component } from 'react';
import './itemList.css';
import GotService from '../services/gotService';
import Spinner from 'reactstrap/lib/Spinner';
export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        itemlist: null,
    }

    componentDidMount() {
        const page = Math.floor(Math.random() * (100 - 40) + 40);

        this.gotService[this.props.dataFunctionName](page)
            .then((data) => {

                data.forEach(element => {
                    element['id'] = element.url.replace(this.gotService._basicUrl, '');
                });

                this.setState(({ itemlist }) => {
                    return {
                        itemlist: data
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderItems(itemlist) {
        return itemlist.map((item) => {
            return (
                <li
                    key={item.id}
                    className="list-group-item"
                    onClick={() => onItemSelected(item.id)}>
                    {item.name}
                </li>
            )
        })

    }

    render() {

        const { itemlist } = this.state;

        if (!itemlist) {
            return <Spinner></Spinner>
        }

        return (
            <ul className="item-list list-group">
                {this.renderItems(itemlist)}
            </ul>
        );
    }
}