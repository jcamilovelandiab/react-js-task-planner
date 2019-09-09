import React, {Component} from 'react';
import { Link } from 'react-router-dom'; //this is important for routing
import styles from './styles.js';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

export class Menu extends Component{
    render(){
        const classes = styles();
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);

        function handleDrawerOpen() {
          setOpen(true);
        }
      
        function handleDrawerClose() {
          setOpen(false);
        }

        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                ></AppBar>
            </div>
        );
    }
}