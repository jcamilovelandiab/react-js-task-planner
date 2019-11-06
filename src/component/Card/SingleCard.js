import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import singleCardStyles from '../Card/SingleCardStyles.js';
import CardMedia from '@material-ui/core/CardMedia';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import TaskSettings from '../TaskSettings/TaskSettings.js';
import PictureAsPdfRoundedIcon from '@material-ui/icons/PictureAsPdfRounded';

export default function SingleCard(props) {
  const classes = singleCardStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () =>{
    setOpen(true);
    console.log(open);
  }

  const handleClose = () =>{
    setOpen(false);
  }

  React.useEffect(() => { //ComponentDidMount in a functional component
    console.log('mount it!');
  }, []);
  
  return (
    <React.Fragment>
      <TaskSettings key={open} open={open} handleClose={handleClose} info={props}/>
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
          action={
            <IconButton aria-label="settings" onClick={handleOpen}>
              <SettingsIcon />
            </IconButton>
          }
          title={props.title}
          subheader={props.dueDate}
        />
        <CardMedia
          className={classes.media}
          image="https://loremflickr.com/320/240"
          title={props.title}
        />
        <CardActions disableSpacing>
          <Typography variant="body2" color="textSecondary" component="p"
            style={{marginRight: "auto"}}>
              {props.responsible.email}
          </Typography>
          <IconButton
            style={{marginLeft: "auto"}}
            aria-label="show more"
          >
            <PictureAsPdfRoundedIcon />
          </IconButton>
      </CardActions>
      </Card>
    </React.Fragment>
  );
}
