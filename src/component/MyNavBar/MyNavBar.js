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
import Box from '@material-ui/core/Box';

import MenuOptions from '../MenuOptions/MenuOptions.js';
import MyNavBarStyles from "./MyNavBarStyles.js";
import EditSharpIcon from '@material-ui/icons/EditSharp';
import EditProfile from "../EditProfile/EditProfile.js";

export default function MyMenu(props) {
    const classes = MyNavBarStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [editingProfile, setEditingProfile] = React.useState(false);
    const [urlProfileImage, setUrlProfileImage] = React.useState('http://localhost:8080/files/profileImage_'+
        JSON.parse(localStorage.getItem('loggedUser')).id);

    const onErrorDownloadProfileImage= () =>{
        console.log(urlProfileImage);
        setUrlProfileImage(process.env.PUBLIC_URL + '/images/profilePicture.jpg');
    }

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function handleSignOut(){
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('profileImage');
        window.location.href = "/login";
    }

    function handleOpenEditProfile(){
        setEditingProfile(true);
    }

    function handleCloseEditProfile(){
        setEditingProfile(false);
    }

    return(
        <div className={classes.root}>
            
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open
                })}
                display="flex"
                >
                <Box display="flex" margin={0}>
                    <Box alignContent="flex-start" flexGrow={1}>
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
                    </Box>
                    <Box style={{margin: "auto"}}>
                        <MenuOptions/>
                    </Box>
                </Box>
            </AppBar>
            
            <EditProfile key={editingProfile} open={editingProfile} handleClose={handleCloseEditProfile}/>

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
                    
                    <Box flexDirection="column" alignItems="center" justify="center" flexWrap="nowrap">
                        <Avatar alt="profile picture" justify="center" id="profilePicture" className={classes.profilePicture}
                            src={urlProfileImage}
                            onError={onErrorDownloadProfileImage}
                            style={{width: 150, height: 150}} 
                            />
                        <Typography variant="h6" noWrap align="center" style={{maxWidth: "160px", marginLeft: "auto", marginRight: "auto"}}>
                            {JSON.parse(localStorage.getItem('loggedUser')).fullName}
                        </Typography>
                        <Fab
                            variant="extended"
                            size="small"
                            color="primary"
                            aria-label="add"
                            className={classes.margin}
                            style={{backgroundColor: "#33E833", color: "#212121"}}
                            onClick={handleOpenEditProfile}
                        >
                            <EditSharpIcon className={classes.extendedIcon} style={{color: "#212121"}}/>
                            Edit profile
                        </Fab>
                    </Box>
                </Grid>
                <Divider style={{marginTop: 20, margin:20, color: "#33C12E"}}/>
                
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
                        <Fab variant="extended" size="small" className={classes.fab} onClick={handleSignOut}
                            style={{backgroundColor: "#C73235"}}>
                            <ExitToAppIcon style={{color:"#212121"}}/>
                            <Typography variant="button" noWrap style={{color:"#212121"}}>
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
            </main>
        </div>
    );
}
