import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import singleCardStyles from '../Card/SingleCardStyles.js';

export default function RecipeReviewCard(props) {
  const classes = singleCardStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          (props.status==="Ready")?<Avatar aria-label="recipe" className={classes.avatar}
          style={{backgroundColor: "#f44336"}}>
          R  </Avatar>:
          (props.status==="Completed")?<Avatar aria-label="recipe" className={classes.avatar} style={{backgroundColor: "#36F485"}}>
            C
          </Avatar>:
          <Avatar aria-label="recipe" className={classes.avatar} style={{backgroundColor: "#176BC2"}}>
          IP
          </Avatar>
        }
        title={props.description}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.status} - {props.dueDate}
        </Typography>  
      </CardContent>

      <CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.responsible.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.responsible.email}
        </Typography>
      </CardActions>
    </Card>
  );
}
