import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Business from '@material-ui/icons/Business';
import Menu from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Divider } from '@material-ui/core';
import { Language } from '@material-ui/icons';

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
      width: "66%",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      backgroundColor: "#ffffff",
    },
    paper2: {
      width: "33%",
      padding: 24,
      paddingTop: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      backgroundColor: "#ffffff",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      position: "absolute", 
      alignItems: "stretch",
      justifyContent: "center",
      width: "100%",
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
    },
    padding: {
        margin: 25,
    }
  }));
  
function Information(props) {
    const classes = useStyles();

    return (
        <div style={{display: "flex", flexFlow: "column", margin: 10}}>
            <InputLabel style={{color: "black", alignSelf: "start"}} id="label">
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
        </div>     
    );
}

function BusinessProfile() {
    const classes = useStyles();

    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [missionStatement, setMissionStatement] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        let data = {
        "businessName": "Foobusiness Name", 
        "email": "foobusiness@bar.com", 
        "phoneNumber": "012008854321",
        "companyDescription": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet dui gravida, faucibus nulla at, pretium enim. Aenean dignissim lacus risus, sit amet porttitor felis fringilla ultricies. Sed orci orci, eleifend vitae ante ac, bibendum viverra sapien. Nam imperdiet lorem sit amet tortor semper, vitae feugiat lorem cursus. Suspendisse faucibus elit felis, at placerat neque vestibulum venenatis. Curabitur sit amet urna augue. Suspendisse ex justo, auctor vestibulum leo vitae, ornare dictum lacus. Vestibulum ultrices vel ex scelerisque vehicula. Nunc sit amet posuere nibh, volutpat dignissim sem. Donec consequat aliquet orci, vel tempor augue malesuada in. Sed aliquet ornare felis eu aliquet. Donec aliquam neque non nulla vestibulum, at ultricies diam sollicitudin. In hac habitasse platea dictumst. Suspendisse finibus quam vel arcu ultricies, tristique sodales ipsum maximus. Etiam ut mi fringilla, pellentesque tortor fermentum, egestas ante. Phasellus eu fringilla elit. Fusce volutpat et purus a eleifend. Nulla ultricies laoreet metus, et ultrices neque venenatis feugiat. Ut sed urna cursus, molestie nisl id, lobortis dui. Nulla egestas eleifend leo, a ullamcorper nulla. Nulla condimentum tristique sem finibus condimentum. Proin non varius sapien. In sed sagittis tellus. Nunc rutrum vestibulum nunc, sed consectetur erat placerat ut. Cras blandit eu quam quis mollis. Proin volutpat euismod quam, sed cursus enim accumsan id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nec feugiat risus. Praesent tincidunt iaculis sem id placerat. Mauris quis lectus tempor, condimentum felis non, maximus eros. ",
        "missionStatement": "Uncompromising foo",
        "address": "Foo bar lane"
        };

        fetch(data)


        setBusinessName(data["businessName"]);
        setEmail(data["email"]);
        setPhoneNumber(data["phoneNumber"]);
        setCompanyDescription(data["companyDescription"]);
        setMissionStatement(data["missionStatement"]);
        setAddress(data["address"]);
    }, []);

    return (
        <div className={classes.container}>
        <Paper className={classes.paper}>
            <Typography style={{paddingTop: 19}} variant="h6" className={classes.title}>
                {businessName}
            </Typography>

            <hr style={{width: "100%"}}></hr>
            
            <div style={{display: "flex", flexFlow: "row", marginBottom: 20}}>
                <Avatar style={{fontSize: 100, width:  200, height: 200, marginRight: 50, marginTop: 25}}>
                    <Business fontSize="inherit" />
                </Avatar>

                <div style={{width: "36%", display: "flex", flexFlow: "row wrap", alignItems: "start"}}>
                    <Information label="Email" value={email} className={classes.padding} />
                    <Information label="Phone Number" value={phoneNumber} className={classes.padding}/>
                    <Information label="Mission Statement" value={missionStatement} />
                    <Information label="Address" value={address} />
                    
                    <Button 
                        style={{alignSelf: "flex-end", flexGrow: 1, marginTop: 10}} 
                        variant="contained" color="primary" 
                        startIcon={<Language /> }
                    >
                        Website
                    </Button>

                </div>


                <div style={{display: "flex", flexFlow: "column", alignItems: "start"}}></div>
            </div>

            {/* <Information label="Company Description" value={companyDescription} /> */}

            {/* <div style={{display: "flex", flexFlow: "column", margin: 10}}> */}
                <InputLabel style={{color: "black", alignSelf: "start"}} id="label">
                <Typography variant="h6" className={classes.title}>
                    Company Description
                </Typography>
                </InputLabel>
                <TextField style={{height: "auto", width: "100%"}} value={companyDescription} className={classes.textBox}
                labelId="label"
                autoComplete="off"
                multiline
                rowsMax="15"
                variant="outlined"
                />
            {/* </div> */}


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

export default BusinessProfile;