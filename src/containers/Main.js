import React, { Component } from "react";
import ChangePWForm from './ChangePWForm.js'
import AddWineForm from './AddWineForm.js'
import WineList from './WineList.js'
import axios from 'axios';

export default class Main extends Component {

  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      wines: []
    }
    this.addWine = this.addWine.bind(this)
  }


componentDidMount () {
  // get wine data for signed in user: populate wines array
  // push wine data into wines array in state

  //ramda https://ramdajs.com/docs/#sort
  const token = this.props.location.state.token

  // check token
  console.log(token)

axios.get('http://localhost:4741/wines', { headers: {
  Authorization: `Bearer ${token}` } })
  .then((result) => {
    console.log(result)
    // check result

    this.setState( { wines: result.data.wines } )
    // setState with result of axios call

    console.log(this.state.wines)
    // check updates state
  })
  .catch((error) => {
    console.log(error)
  })
}

userLogout = (e) => {
  axios.delete('http://localhost:4741/sign-out', { headers: {
    Authorization: `Bearer ${this.props.location.state.token}` } })
      .then((result) => {
        console.log(result)
        console.log('user logged out')
        this.props.history.push({
          pathname: '/'
        })
      })
      .catch((error) => {
        console.log(error)
      })
}

addWine(wine) {
  // const wine =
  //   text

  this.setState(prevState => {
    let nextState = Object.assign({}, prevState)
    nextState.wines.unshift(wine)
    return nextState
  })
}


  render() {
    return (
      <div>
      <button type="submit" onClick={this.userLogout}>LOGOUT</button>
      <ChangePWForm token={this.props.location.state.token}/>
      <AddWineForm wines={this.state.wines} addWine={this.addWine} token={this.props.location.state.token}/>
      <WineList wines={this.state.wines}/>
      </div>
    )
  }
}
