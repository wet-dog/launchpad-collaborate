import React, { useState } from 'react';

import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 36,
    borderRadius: 3,
    height: "80%",
    width: "25%",
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
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;  
const MenuProps = {
  PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
    },
  },
};

const occupations = [
  'Management', 
  'Business and financial operations', 
  'Computers and mathematics', 
  'Architecture and engineering', 
  'Law', 
  'Healthcare practitioners'
];

const technologyNames = [
  'C',
  'C#', 
  'C++', 
  'CSS',
  'Git',
  'HTML', 
  'Haskell', 
  'Java', 
  'JavaScript', 
  'Lisp', 
  'Python', 
  'R', 
  'React', 
  'Ruby'
];

function Login() {
    const classes = useStyles();
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [technologies, setTechnologies] = useState([]);
    const [bio, setBio] = useState("");
    const [address, setAddress] = useState("");
  
    const valid = true;
  
    return (
      <form className={classes.form}>
        <TextField value={username} className={classes.field}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          autoComplete="off"
        />
        <TextField value={password} className={classes.field}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          autoComplete="off"
        />

        <Button 
          style={{alignSelf: "center", fontSize: 18,flexGrow: 1, marginTop: 10}} 
          variant="contained" color="primary" 
          component={Link} to="/UserProfile"
        >
          Log In
        </Button>

      </form>
    );
  }

export default Login;

