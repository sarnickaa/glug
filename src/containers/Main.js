import React, { Component } from "react";
import ChangePWForm from './ChangePWForm.js'
import AddWineForm from './AddWineForm.js'
import axios from 'axios';
// import Modal, {closeStyle} from 'simple-react-modal'
// import "./Register.css";

export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      wines: [

      ]
    }
  }


componentDidMount () {
  // get wine data for signed in user? axios GET & populate wines array?
  // axios post
  // push wine data into wines array in state object?

  
  // get token from local store:
  const token = localStorage.getItem('token')
  console.log(token)

axios.get('http://localhost:4741/wines', { headers: {
  Authorization: `Bearer ${token}` } })
  .then((result) => {
    console.log(result)
    // result = data.wines[].wine{}
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
      </div>
    )
      // changePW Form
      // addWine form
      // wineList - pass props wine = this.state.wines

  }
}
