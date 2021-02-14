import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuBar: {
        alignItems: "center",
    },
    DropDown: {
        zIndex: 5,
        position: "relative",
        left: 0,
        margin: 0,
    },
    title: {
        alignSelf: "start",
        flexGrow: 0,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    field: {
      padding: 10,
    },
    paper: {
      width: "33%",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      backgroundColor: "#ffffff",
    },
    paper2: {
      width: "66%",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
      backgroundColor: "#ffffff",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      position: "absolute", 
      alignItems: "stretch",
      justifyContent: "center",
      width: "90%",
      height: "90%",
    },
    textBox: {
      backgroundColor: "#fafbfc"
    },
    project: {
      display: "flex",
      alignSelf: "center",
      padding: 10,
      margin: 10,
      flexFlow: "column",
      backgroundColor: "#fafbfc",
      width: "100%",
    }
  }));
  
function Information(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <InputLabel style={{color: "black"}} id="label">
            <Typography variant="h6" className={classes.title}>
                {props.label}
            </Typography>
            </InputLabel>
            <TextField value={props.value} className={classes.textBox}
            labelId="label"
            autoComplete="off"
            multiline
            variant="outlined"
            />
        </React.Fragment>     
    );
}

function UserProfile() {
    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [technologies, setTechnologies] = useState([]);
    const [bio, setBio] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        let data = {
        "username": "foo", 
        "email": "foo@bar.com", 
        "phoneNumber": "077788854321",
        "fullName": "Foo Bar",
        "occupation": "Foologist",
        "technologies": "Bar++",
        "bio": "Foo bar bar",
        "address": "Foo bar lane"
        };

        fetch(data)


        setUsername(data["username"]);
        setEmail(data["email"]);
        setPhoneNumber(data["phoneNumber"]);
        setFullName(data["fullName"]);
        setOccupation(data["occupation"]);
        setTechnologies(data["technologies"]);
        setBio(data["bio"]);
        setAddress(data["address"]);
    }, []);

    return (
        <div className={classes.container}>
        <Paper className={classes.paper}>
            <Typography style={{paddingTop: 19}} variant="h6" className={classes.title}>
                Profile
            </Typography>

            <hr style={{width: "100%"}}></hr>
            
            <Information label="Username" value={username} />
            <Information label="Full Name" value={fullName} />
            <Information label="Email" value={email} />
            <Information label="Phone Number" value={phoneNumber} />
            <Information label="Occupation" value={occupation} />
            <Information label="Technologies" value={technologies} />
            <Information label="Bio" value={bio} />
            <Information label="Address" value={address} />

        </Paper>
        
        {/* Second half */}
        <Paper className={classes.paper2}>
          <div style={{width: "100%", display: "flex", flexFlow: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Typography style={{alignSelf: "center"}} variant="h6" className={classes.title}>
                My Projects
            </Typography>
            <SearchBar />

          </div>


            <hr style={{width: "100%"}}></hr>
            <Project index="1" business="foo" role="bar" />
            <Project index="2" business="foo" role="bar" />
            <Project index="3" business="foo" role="bar" />
            <Project index="4" business="foo" role="bar" />
            <Project index="5" business="foo" role="bar" />
        </Paper>
        </div>
    );
}

function Project(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.project}>
      <Typography variant="h6" className={classes.title}>
          Project: {props.index}
      </Typography>
      
      <Typography variant="h6" className={classes.title}>
          Business: {props.business}
      </Typography>   
      <Typography variant="h6" className={classes.title}>
          Role: {props.role}
      </Typography>       
    </Paper>
  );
}

function SearchBar() {
    const classes = useStyles();
  
    return (
      <Paper component="form" className={"foo"}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <Menu />
        </IconButton>
        <InputBase
          className={"foo"}
          inputProps={{ 'aria-label': 'Search for a project here.' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
}

export default UserProfile;