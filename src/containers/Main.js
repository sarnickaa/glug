import React, { Component } from "react";
import axios from 'axios';
import { apiUrl } from '../server.js'
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';


import MyModal from "./MyModal.js"
import ChangePWForm from './ChangePWForm.js'
import WineForm from './WineForm.js'
import WineList from './WineList.js'
import './Main.css';

export default class Main extends Component {

  constructor(props) {
    // console.log(props)
    super(props)
    this.state = {
      token: null,
      wines: [],
      currentFormWineID: null
    }
  }

// do not need to bind to state as it is an ES6 function
// this function will set the wine ID on the form when UPDATE is selected
// it is passed as a prop to <WineForm /> it lives here as this is its 'parent' component
// it holds all the state needed for WineForm to function
  setCurrentFormWineID = (id) => {
    this.setState({currentFormWineID: id})
  }

  openModal(text, data) {
        ModalManager.open(<MyModal text={text} onRequestClose={() => true} />);
     }

  getAllWines = () => {
    // get wine data for signed in user: populate wines array
    // push wine data into wines array in state
    // this function runs immediatly after successful login to READ a users collection
    axios.get(`${apiUrl}/wines`, {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
      .then((result) => {
        // console.log(result)
        this.setState({ wines: result.data.wines.reverse() })
        // setState with result of axios call
        // console.log(this.state.wines)
      })
      .catch((error) => {
        console.log(error)
      })
  }



  componentDidMount(props) {
    //ramda https://ramdajs.com/docs/#sort - look into sorting user wine array
    const token = this.props.location.state.token
    this.setState({token}, this.getAllWines)
    this.props.setViewLinkState()
    // sets viewLinkState to null - removing visible links to login/signup
  }



  userLogout = (e) => {
    axios.delete(`${apiUrl}/sign-out`, {
      headers: {
        Authorization: `Bearer ${this.props.location.state.token}`
      }
    })
      .then((result) => {
        // console.log(result)
        // console.log('user logged out')
        this.props.setViewLinkState('view')
        this.props.history.push({
          pathname: '/'
        })
      })
      .then(this.openModal.bind(null, "Bye! Thanks for using GLUG!"))
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
  // ternary condition: if currentFormWineID is null - load the "Add" version of the form. If set to an ID load the "Update" version
    return (
      <div>
      <AppBar position="sticky" className="background" id="mainApp">
        <Button type="submit" id="logout-button" onClick={this.userLogout}>X</Button>
      </AppBar>
        <ChangePWForm token={this.props.location.state.token} />
        {this.state.currentFormWineID
          ? <WineForm action="Update"
            setCurrentFormWineID={this.setCurrentFormWineID}
            currentFormWineID={this.state.currentFormWineID}
            wines={this.state.wines}
            wineRequest={this.getAllWines}
            token={this.state.token} />
          : <WineForm action="Add"
            setCurrentFormWineID={this.setCurrentFormWineID}
            currentFormWineID={this.state.currentFormWineID}
            wines={this.state.wines}
            wineRequest={this.getAllWines}
            token={this.state.token} />
        }
        <WineList wines={this.state.wines}
                  setCurrentFormWineID={this.setCurrentFormWineID}
                  token={this.state.token}
                  wineRequest={this.getAllWines} />
      </div>
    )
  }
}
