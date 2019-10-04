import React from "react";


import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from '@material-ui/core/Box';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import MyNavBarBackStyles from './MyNavBarBackStyles.js';

export default function MyNavBarBack(){
    const classes = MyNavBarBackStyles();

    function onClickBack(){
        window.location.href="/home";
    }

    return(

        <div className={classes.root}>
            <CssBaseline />
            
            <AppBar
                position="fixed"
                className={classes.appBar}
                display="flex"
                >
                <Box display="flex" margin={0}>
                    <Box alignContent="flex-start" flexGrow={1}>
                        <Toolbar>
                            <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onClickBack}
                                    edge="start"
                                    className={clsx(classes.menuButton)}
                                >
                                <ChevronLeftIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                Task Planer
                            </Typography>
                        </Toolbar>
                    </Box>
                </Box>
            </AppBar>
            <main
                className={clsx(classes.content)}
            >
            </main>
        </div>
    );
}