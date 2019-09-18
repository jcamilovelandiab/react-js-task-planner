import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuStyles from "./MenuStyles.js";

export default function Menu() {
    const classes = MenuStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function handleSignOut(){
        localStorage.removeItem('isLoggedIn');
        window.location.href = "/login";
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open
                })}>
                <Toolbar>
                    <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Task Planer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper
                }}
                >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose} className={classes.icon}>
                        {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                        ) : (
                        <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                
                <Grid container justify="center" alignItems="center">
                    <Avatar alt="profile picture"
                        src={process.env.PUBLIC_URL + '/images/profilePicture.jpg'}
                        style={{width: 150, height: 150}} />
                    <Typography variant="h6" noWrap>
                        Olivia Musk
                    </Typography>
                </Grid>
                <Divider style={{marginTop: 20, margin:20, color: "#FFFFFA"}}/>
                
                <List>
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                            <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notifications"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                            <HelpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                    </ListItem>
                    <ListItem>
                        <Fab variant="extended" size="small" className={classes.fab} onClick={handleSignOut}>
                            <ExitToAppIcon style={{color:"#373734"}}/>
                            <Typography variant="button" noWrap style={{color:"#373734"}}>
                                Sign out
                            </Typography>
                        </Fab>
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: open
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    );
}
