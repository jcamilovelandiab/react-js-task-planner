import React, { Component } from "react";
import Menu from '../Menu/Menu.js';
import {CardList} from '../CardList/CardList.js';
import './Home.css';
import AddCard from '../AddCard/AddCard.js';

export class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [
            {
                description: "Implement Login View",
                responsible: {
                    name: "Santiago Carrillo",
                    email: "sancarbar@gmail.com"
                },
                status: "In progress",
                dueDate: "12/02/2019"
            },
            {
                description: "Implement Login Controller",
                responsible: {
                    name: "Santiago Carrillo",
                    email: "sancarbar@gmail.com"
                },
                status: "Ready",
                dueDate: "12/02/2019"
            }]
        }
    }

    render(){
        return(
            <div>
                <Menu />
                <CardList cardList={this.state.items}/>
                <AddCard />
            </div>
        );
    }

}