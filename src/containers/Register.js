import React, { Component } from "react";
import axios from 'axios';
// import Modal, {closeStyle} from 'simple-react-modal'
import "./Register.css";
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import MyModal from "./MyModal.js"

export default class Register extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  // show(){
  //   this.setState({show: true})
  // }
  //
  // close(){
  //   this.setState({show: false})
  // }

  openModal(text, data) {
        ModalManager.open(<MyModal text={text} onRequestClose={() => true} />);
     }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { email, password, password_confirmation } = this.state

    axios.post('http://localhost:4741/sign-up', { email, password, password_confirmation })
      .then((result) => {
        console.log(result)
        this.props.history.push('/sign-in')
      })
      .catch(this.openModal.bind(null, "Oops! check your email or password!"))
      .catch((error) => {
        console.error(error)
      })
  }


  render() {
    const { email, password, password_confirmation } = this.state
    return (
    <div>
      <form className="Register-form" onSubmit={this.onSubmit}>
        <label>Sign Up for GLUG!</label>
        <br />
          <input type="email" placeholder="your email" name="email" value={email} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="password" name="password" value={password} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="confirm password" name="password_confirmation" value={password_confirmation} onChange={this.onChange}></input>
          <br />
            <button type="submit" id="register-button">Register</button>
        </form>

          {/* <Modal
            className="test-class"
            style={{background: 'red'}}
            containerStyle={{background: 'blue'}}
            containerClassName="test"
            closeOnOuterClick={true}
            show={this.state.show}
            onClose={this.close.bind(this)}>

              <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
                <div>hey</div>
        </Modal> */}

      </div>
    );
  }
}
