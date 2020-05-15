import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './styles.scss';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  buttons: {
    margin: "20% auto 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: '10px',

  },
  button: {
    width: "250px",
    borderRadius: "50px",
    height: "50px",
    margin: "15px 0",
    textTransform: "capitalize"
  }
}));


function Marketing() {
  const dummyCategories = ['Home', 'About']
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root} data-test="marketing-page">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          ><MenuIcon /></IconButton>
          <div className='logo' data-test="test-logo"></div>
          <Typography variant="h6" noWrap>Niyon</Typography>
        </Toolbar>
      </AppBar>      
      <nav className={classes.drawer}>        
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{paper: classes.drawerPaper }}
            ModalProps={{keepMounted: true}}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}><CloseIcon/></IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
      <div className="marketing-container">
        <div className="container">
          <h3>Connect with Mentors in your area!</h3>
        </div>    
        <div className={classes.buttons}>
          <Button variant="contained" color="primary" className={classes.button}>Sign Up</Button>
          <Button variant="contained" color="secondary" className={classes.button}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
