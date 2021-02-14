import './App.css';

import React, { useState, useEffect, useRef } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import BusinessSignUp from './BusinessSignUp';
import UserSignUp from './UserSignUp';
import BusinessProfile from './BusinessProfile';
import UserProfile from './UserProfile';
import ProjectPage from './ProjectPage';
import Login from './Login';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Menu from '@material-ui/icons/Menu';
import Business from '@material-ui/icons/Business';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuBar: {
    backgroundColor: "#1669BB"
  },
  DropDown: {
    zIndex: 5,
    position: "relative",
    left: 0,
    margin: 0,
  },
  title: {
    align: "center",
    flexGrow: 0,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 36,
    borderRadius: 3,
    height: "75%",
    width: "33%",
  },
  field: {
    padding: 10,
  },
  paper: {
    width: "50%",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    backgroundColor: "#ffffff",
  },
  paper2: {
    width: "50%",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    position: "absolute", 
    backgroundColor: "#ffffff",
    alignItems: "stretch",
    justifyContent: "center",
    borderRadius: 3,
    width: "100%",
    height: "100%",
    outline: "2px solid blue",
  },
  readBio: {
    backgroundColor: "#FAFBFC"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App"> 
        <header style={{flexGrow: 0}}>        
          <Paper position="static" className={classes.menuBar}>
            <Toolbar color="inherit" style={{display: "flex", justifyContent: "space-around"}}>
              {/* <DropDown edge="start" className={classes.dropDown}></DropDown> */}
              <IconButton color="inherit" aria-label="return home" component={"span", Link} to="/">
                <HomeIcon style={{color:"white"}}/>
              </IconButton>
              <Typography variant="h4" className={classes.title} style={{color:"white", textTransform: 'none'}}>
                SYNAPSE
              </Typography>
              <Button color="inherit" component={Link} to="/UserSignUp">
                <Typography variant="h6" style={{color:"white", textTransform: 'none'}}>
                  User Sign Up
                </Typography>  
              </Button>
              <Button color="inherit" component={Link} to="/BusinessSignUp">
                <Typography variant="h6" style={{color:"white", textTransform: 'none'}}>
                  Business Sign Up
                </Typography>    
              </Button>
              <Button color="inherit" component={Link} to="/Login">
                <Typography variant="h6" style={{color:"white", textTransform: 'none'}}>
                  Login
                </Typography>   
              </Button>
              <IconButton color="inherit" aria-label="upload picture" component={"span", Link} to="/BusinessProfile">
                <Business style={{color:"white"}}/>
              </IconButton>
              <IconButton color="inherit" aria-label="upload picture" component={"span", Link} to="/UserProfile">
                <AccountCircle style={{color:"white"}}/>
              </IconButton>
            </Toolbar>
          </Paper>
        </header>
        <main className="App-header">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/UserSignUp">
              <UserSignUp />
            </Route>
            <Route path="/BusinessSignUp">
              <BusinessSignUp />
            </Route>
            <Route path="/UserProfile">
              <UserProfile />
            </Route>
            <Route path="/BusinessProfile">
              <BusinessProfile />
            </Route>
            <Route path="/JobApplication">
              <JobApplication />
            </Route>
            <Route path="/CreateJobOffer">
              <CreateJobOffer />
            </Route>
            <Route path="/CreateProject">
              <CreateProject />
            </Route>
            <Route path="/ProjectPage">
              <ProjectPage />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch> 
        </main>
      </div>
    </Router>
  );
}

function DropDown() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="inherit"
        >
          <HomeIcon />
        </IconButton>
        <Popper style={{zIndex: 2}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

function SearchBar() {
  const classes = useStyles();

  return (
    <Paper style={{display: "flex", flexDirection:"row"}} component="form" className={"foo"}>
      <IconButton style={{alignSelf:"start"}} className={classes.iconButton} aria-label="menu">
        <Menu />
      </IconButton>
      <InputBase
        className={"foo"}
        inputProps={{ 'aria-label': 'Search for a project here.' }}
      />
      <IconButton style={{alignSelf:"end"}} type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

function Home() {
  const classes = useStyles();
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Typography style={{marginBottom: 10,alignSelf:"center", color: "white"}} variant="h5" className={classes.title}>
        Search Projects
      </Typography>
      <SearchBar />
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return (
    <form className={"foo"} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p>hello world</p>
    </form>
  );
}

function CreateJobOffer() {
  const classes = useStyles();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  //const [tags, setTags] = useState([]);
  const [wage, setWage] = useState("");

  const valid = true;

  return (
  <form className={classes.form}>
      <Typography style={{alignSelf:"start", color: "black"}} variant="h6" className={classes.title}>
          Make Job Offer
      </Typography>

      <hr style={{width: "100%"}}></hr>
<TextField
  value={jobTitle}
  className={classes.field}
  onChange={(e) => setJobTitle(e.target.value)}
  placeholder="Job Title"
  autoComplete="off"
/>
<TextField
  value={jobDescription}
  className={classes.field}
  onChange={(e) => setjobDescription(e.target.value)}
  placeholder="Type your job description here"
  autoComplete="off"
  multiline
  variant="outlined"
  rows={4}
/>

 {/* TODO: Add the third box of tags HERE */}

<TextField 
value={wage}
className={classes.field}
onChange={(e) => setWage(e.target.value)}
placeholder="Wage Per Hour"
autoComplete="off"
/>

<button type="submit" autoComplete="off" disabled={!valid}
  component={Link} to="/Login"
>
  Send
</button>
</form>
  );
}

function JobApplication() {
  const classes = useStyles();
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [businessName, setBusinessName] = useState("foobusiness")
  //const [tags, setTags] = useState([]);
  const [wage, setWage] = useState("");
  const [jobDuration, setJobDuration] = useState("");

  const valid = true;

  return (
  <form className={classes.form}>
      <Typography style={{alignSelf:"start", color: "black"}} variant="h6" className={classes.title}>
          Make Job Listing
      </Typography>

      <hr style={{width: "100%"}}></hr>
<TextField
  value={jobTitle}
  className={classes.field}
  onChange={(e) => setJobTitle(e.target.value)}
  placeholder="Job Title"
  autoComplete="off"
/>
  <div style={{display:"flex", flexFlow:"row", alignItems:"center"}}>
    <Information label="Business Name" value={businessName} className={classes.padding} />
    <Button style={{ color: "#ffffff", height:"100%",width:"50%", backgroundColor: "#3F51B5"}} component={Link} to="/BusinessProfile">View Profile</Button>
  </div>
 {/* TODO: Add the second box of Bussiness and the button to its right /}

<TextField
  value={jobDescription}
  className={classes.field}
  onChange={(e) => setjobDescription(e.target.value)}
  placeholder="Type your job description here"
  autoComplete="off"
  multiline
  variant="outlined"
  rows={4}
/>

 {/ TODO: Add the fourth box of tags HERE */}

 <TextField 
value={wage}
className={classes.field}
onChange={(e) => setWage(e.target.value)}
placeholder="Wage Per Hour"
autoComplete="off"
/>
<TextField 
value={jobDuration}
className={classes.field}
onChange={(e) => setJobDuration(e.target.value)}
placeholder="Job Duration"
autoComplete="off"
/>

<button type="submit" autoComplete="off" disabled={!valid}>
  Send
</button>
</form>
  );
}

function CreateProject() {
  const classes = useStyles();
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const valid = true;

  return (
    <form className={classes.form}>
      <Typography style={{alignSelf:"start", color: "black"}} variant="h6" className={classes.title}>
          Create Project
      </Typography>

      <hr style={{width: "100%"}}></hr>

      <TextField
        value={projectName}
        className={classes.field}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
        autoComplete="off"
      />
      <TextField
        value={projectDescription}
        className={classes.field}
        onChange={(e) => setProjectDescription(e.target.value)}
        placeholder="Type your project description here"
        autoComplete="off"
        multiline
        variant="outlined"
        rows={4}
      />

      <button type="submit" autoComplete="off" disabled={!valid}>
        Send
      </button>
    </form>
  );
}

function Information(props) {
  const classes = useStyles();

  return (
      <div style={{display: "flex", flexFlow: "column", margin: 10, width:"100%"}}>
          <InputLabel style={{color: "black", alignSelf: "start"}} id="label">
          <Typography variant="h6" className={classes.title}>
              {props.label}
          </Typography>
          </InputLabel>
          <TextField style={{width: "50%"}} value={props.value} className={classes.textBox}
          labelId="label"
          autoComplete="off"
          multiline
          variant="outlined"
          />
      </div>     
  );
}

export default App;
