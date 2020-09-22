import React, { Component } from "react";
import "./App.css";

import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import SpeedDials from "./pages/SpeedDials";
import Ratings from "./pages/Ratings";
import Drawers from "./pages/Drawers";
import NotFound from "./pages/NotFount";
import Footers from "./pages/Footers";

//==================================================================
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Tooltip from "@material-ui/core/Tooltip";

import clsx from "clsx";
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
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  header: {
    flexGrow: 1,
  },
  main: {
    flexGrow: 1,
    padding: "10px",
  },
  footer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    padding: "0px",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexGrow: 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuTitle: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  //const theme = useTheme();
  
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <header>
            <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
              <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.menuTitle}>
                  Menu
                </Typography>
                <Tooltip title="Search">
                  <IconButton aria-label="search" color="inherit">
                    <SearchIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="More">
                  <IconButton aria-label="display more actions" edge="end" color="inherit" onClick={handleClick}>
                    <MoreIcon />
                  </IconButton>
                </Tooltip>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                  <MenuItem button component={Link} to="/" onClick={handleClose}>
                    <ListItemIcon>
                      <MenuIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Home</Typography>
                  </MenuItem>
                  <MenuItem button component={Link} to="/speeddials" onClick={handleClose}>
                    <ListItemIcon>
                      <MenuIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Speed dial</Typography>
                  </MenuItem>
                  <MenuItem button component={Link} to="/ratings" onClick={handleClose}>
                    <ListItemIcon>
                      <MenuIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Rating</Typography>
                  </MenuItem>
                  <MenuItem button component={Link} to="/drawers" onClick={handleClose}>
                    <ListItemIcon>
                      <MenuIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Drawer</Typography>
                  </MenuItem>
                </Menu>
              </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{ paper: classes.drawerPaper }}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
              </div>
              <Divider />
              <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/speeddials">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Speed Dial" />
                </ListItem>
                <ListItem button component={Link} to="/ratings">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Rating" />
                </ListItem>
                <ListItem button component={Link} to="/drawers">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drawer" />
                </ListItem>
              </List>
            </Drawer>
          </header>

          <main className={clsx(classes.content, { [classes.contentShift]: open })}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/speeddials" component={SpeedDials} />
              <Route path="/ratings" component={Ratings} />
              <Route path="/drawers" component={Drawers} />
              <Route component={NotFound} />
            </Switch>
          </main>

          <footer className={classes.footer}>
            <Footers />
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// 다른 주소에 따라 다른 뷰를 보여주는것을 라우팅 이라고 한다.
