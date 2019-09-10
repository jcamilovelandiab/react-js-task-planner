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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuStyles from "./MenuStyles.js";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MapIcon from '@material-ui/icons/Map';
import HelpIcon from '@material-ui/icons/Help';

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
                        BiciRoute
                    </Typography>
                    
                    <Fab variant="extended" size="small" className={classes.fab} onClick={handleSignOut}>
                        <ExitToAppIcon style={{color:"#373734"}}/>
                        <Typography variant="button" noWrap style={{color:"#373734"}}>
                            Sign out
                        </Typography>
                    </Fab>
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
                                <MapIcon />
                            </ListItemIcon>
                            <ListItemText primary="My trips" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.icon}>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Help" />
                        </ListItem>
                    </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: open
                })}
            >
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
                dolor purus non enim praesent elementum facilisis leo vel. Risus at
                ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
                quisque non tellus. Convallis convallis tellus id interdum velit
                laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
                adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
                eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
                quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                vivamus at augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
                faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                morbi tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>
        </div>
    );
}
