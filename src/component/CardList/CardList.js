import React, {Component} from 'react';
import SingleCard from '../Card/SingleCard.js';

export class CardList extends Component{
    
    render(){
        const cardList = this.props.cardList.map((card, i) => {
            return (
                <SingleCard key={i}
                    description={card.description}
                    responsible={card.responsible}
                    status = {card.status}
                    dueDate = {card.dueDate}
                    />
            );
        });

        return (
            <table justify="center" style={{width: "60%", margin:"auto"}}>
                <tbody>
                    {cardList}
                </tbody>
            </table>
        );
    }
}