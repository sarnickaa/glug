import React, { Component } from "react";
import axios from 'axios';

import ChangePWForm from './ChangePWForm.js'
import WineForm from './WineForm.js'
import WineList from './WineList.js'


export default class Main extends Component {

  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      token: null,
      wines: [],
      currentFormWineID: null
    }
    // this.addWine = this.addWine.bind(this)
  }

  // clearFormFields = (elemId) => {
  //   document.getElementById(elemId).reset();
  // }

  setCurrentFormWineID = (id) => {
    this.setState({currentFormWineID: id})
  }

  getAllWines = () => {
    axios.get('http://localhost:4741/wines', {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
      .then((result) => {
        console.log(result)
        // check result

        this.setState({ wines: result.data.wines })
        // setState with result of axios call

        console.log(this.state.wines)
        // check updates state
      })
      .catch((error) => {
        console.log(error)
      })
  }



  componentDidMount() {
    // get wine data for signed in user: populate wines array
    // push wine data into wines array in state

    //ramda https://ramdajs.com/docs/#sort
    const token = this.props.location.state.token
    this.setState({token}, this.getAllWines)

    // this.props.setViewLinkState()

    // // check token
    // console.log(token)
    //
    // this.getAllWines(token)
  }



  userLogout = (e) => {
    axios.delete('http://localhost:4741/sign-out', {
      headers: {
        Authorization: `Bearer ${this.props.location.state.token}`
      }
    })
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

  // addWine(wine) {
  //   // const wine =
  //   //   text
  //
  //   this.setState(prevState => {
  //     let nextState = Object.assign({}, prevState)
  //     nextState.wines.unshift(wine)
  //     return nextState
  //   })
  // }
  //
  // patchWine(wine) {
  //   console.log(wine)
  // }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.userLogout}>LOGOUT</button>
        <ChangePWForm token={this.props.location.state.token}
                      cancelCourse={this.clearFormFields}/>
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
