import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import CloseIcon from '@material-ui/icons/Close';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

const drawerWidth = 220;

const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 80,
        marginRight: 36
    },
    menuButtonIconClosed: {
        transition: theme.transitions.create(["transform"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        transform: "rotate(0deg)"
    },
    menuButtonIconOpen: {
        transition: theme.transitions.create(["transform"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        transform: "rotate(180deg)"
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9 + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    },
    grow: {
        marginLeft: "20px",
        marginRight: "10px"
    },
    account: {
        position: 'absolute',
        right: '15px'
    },
    
});

class MiniDrawer extends React.Component {
    state = {
        open: true,
        anchorEl: null
    };

    handleDrawerOpen = () => {
        this.setState({
            open: !this.state.open
        });
    };


    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    _renderAppBar = () => {
        const { classes, theme } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <AppBar
                position="fixed"
                className={classes.appBar}
                fooJon={classNames(classes.appBar, {
                    [classes.appBarShift]: this.state.open
                })}
            >
                <Toolbar disableGutters={true}>   
                    <SportsSoccerIcon 
                        variant="h6"
                        color="inherit"
                        className={classes.grow}
                        noWrap
                        fontSize="large"
                    /> <h2>F.C.B</h2>

                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classes.menuButton}
                    >
                        {
                            this.state.open ? <CloseIcon /> : <MenuIcon />
                        }
                    </IconButton>
                    
                        <div className={classes.account}>
                            <IconButton
                                aria-owns={open ? "menu-appbar" : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle className={classes.account}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                </Toolbar>
            </AppBar>
        )
    }

    _renderDrawer = () => {
        const { classes, theme } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const lisMenu = [
            {
                titleMenu: 'Dashboard',
                linkMenu: '/'
            },
            {
                titleMenu: 'News',
                linkMenu: '/news'
            },
            {
                titleMenu: 'Transfer',
                linkMenu: '/transfer'
            },
            {
                titleMenu: 'Gallery',
                linkMenu: '/gallery'
            },
            {
                titleMenu: 'Players',
                linkMenu: '/players'
            },
            {
                titleMenu: 'Spam',
                linkMenu: '/spam'
            }
        ];
        
        return (
            <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                    [classes.drawerOpen]: this.state.open,
                    [classes.drawerClose]: !this.state.open
                })}
                classes={{
                    paper: classNames({
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open
                    })
                }}
                open={this.state.open}
            >
                <div className={classes.toolbar} />
                <List >
                    {lisMenu.map((text, index) => (
                        <a href={text.linkMenu} style={{textDecoration:'none', color:'black'}}>
                            <ListItem button key={text} >
                                <ListItemIcon >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text.titleMenu} />
                            </ListItem>
                        </a>
                    ))}
                </List>
                <Divider />
            </Drawer>
        )
    }

    render() {
        const { classes, theme, children } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <CssBaseline />
                {this._renderAppBar()}
                {this._renderDrawer()}
                <main style={{ margin:'88px 30px 0px 30px', width:'100%' }}>
                    {children}
                </main>
                <footer style={{ position: 'fixed', bottom: 0 }}>
                    {/* <Footer /> */}
                </footer>
            </div>
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
