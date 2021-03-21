import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Utils from "../service/Utils";


const USERS_REST_API_URL = "http://localhost:8000/user";

export default class AddNewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: "",
      password: "",
      email: "",

      name_filled: "outlined",
      password_filled: "outlined",
      email_filled: "outlined",
      emailError: ""
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseAndSaveUser = this.handleCloseAndSaveUser.bind(this);
  }

  handleClickOpen = (event) => {
    this.setState({
      open: true,
      username: "",
      password: "",
      email: "",
    });
    console.log("opened");
  };
  handleClose = (event) => {
    this.setState({ open: false });
    console.log("closed");
  };

  handleCloseAndSaveUser = (event) => {
    console.log(
      "User: [username: " +
        this.state.username +
        ", password: " +
        this.state.password +
        ", email: " +
        this.state.email +
        "]"
    );
    if (
      Utils.isValueNotEmpty(this.state.username) &&
      Utils.isValueNotEmpty(this.state.password) &&
      Utils.isNotEmptyEmail(this.state.email)
    ) {
      this.setState({ open: false });
      console.log("close and save user");

      event.preventDefault();

      fetch(USERS_REST_API_URL, {
        method: "POST",
        mode: 'no-cors',
        body: JSON.stringify({
         username: this.state.username,
         email: this.state.email,
         password: this.state.password
        })
      })
       
       
    } else {
      this.setState({
        open: true,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        name_filled: Utils.isValueNotEmpty(this.state.username) ? "outlined" : "filled",
        password_filled: Utils.isValueNotEmpty(this.state.password) ? "outlined" : "filled",
        
        email_filled: Utils.isValueNotEmpty(this.state.email)  ? "outlined"  : "filled",
        emailError: Utils.isNotEmptyEmail(this.state.email)  ?  "":  "Enter a valid email"
      });
      console.log("do not close dialog beause empty field(s)");
    }
  };

  getusername = (event) => {
    this.setState({ username: event.target.value,
      name_filled: "outlined",
    });
  };
  getPassword = (event) => {
    this.setState({ password: event.target.value,
    
      password_filled:  "outlined",
    });
  };
  getEmail = (event) => {
    this.setState({ email: event.target.value,
      email_filled:  "outlined",
      emailError: "" 
    });
  };




  render() {
    return (
      <div className="text-left">
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          CREATE NEW ACCOUT
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">Add new User</DialogTitle>

          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Login"
              type="text"
              //   onChange={(event) => setusername(event.target.value)}
              onChange={this.getusername}
              variant={this.state.name_filled}
            />
            <br />
            <TextField
              autoFocus
              margin="dense"
              label="Password"
              type="password"
              //    onChange={(event) => setpassword(event.target.value)}
              onChange={this.getPassword}
              variant={this.state.password_filled}
            />
            <br />
            <TextField
              id="componentEmail"
              autoFocus
              margin="dense"
              label="Email Address"
              type="email"
              onChange={this.getEmail}
              variant={this.state.email_filled}
            /><br/>
                    <span style={{ 
          fontWeight: 'bold', 
          color: 'red', 
        }}>{this.state.emailError}</span> 
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCloseAndSaveUser} color="primary">
              Add User
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}