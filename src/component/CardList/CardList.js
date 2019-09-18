import React, {Component} from 'react';
import SingleCard from '../Card/SingleCard.js';
import { Grid } from '@material-ui/core';

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
            <Grid container alignItems="center" justify="center">
                <table alignItems="center" justify="center" style={{width: "60%"}}>
                    <thead>
                        <tr>
                            <th>Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardList}
                    </tbody>
                </table>
            </Grid>
        );
    }

}