import React, { Component } from "react";
import ChangePWForm from './ChangePWForm.js'
import AddWineForm from './AddWineForm.js'
import WineList from './WineList.js'
import axios from 'axios';

export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      wines: []
    }
  }


componentDidMount () {
  // get wine data for signed in user? axios GET & populate wines array
  // push wine data into wines array in state object

  // get token from local store:
  const token = localStorage.getItem('token')

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


  render() {
    return (
      <div>
      <ChangePWForm />
      <AddWineForm />
      <WineList wines={this.state.wines}/>
      </div>
    )
      // wineList - pass props wine = this.state.wines

  }
}
