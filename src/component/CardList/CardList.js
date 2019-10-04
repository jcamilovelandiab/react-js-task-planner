import React, {Component} from 'react';
import SingleCard from '../Card/SingleCard.js';

export class CardList extends Component{
    
    render(){
        const cardList = this.props.cardList.map((task, i) => {
            return (
                <SingleCard
                    description={task.description}
                    responsible={task.responsible}
                    status = {task.status}
                    dueDate = {task.dueDate}
                    />
            );
        });

        return (
            <table justify="center" style={{width: "60%", margin:"auto", padding: "10px"}}>
                <tbody id="taskList">
                    {cardList}
                </tbody>
            </table>
        );
    }
}