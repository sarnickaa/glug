import React, { Component } from 'react';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import './MyModal.css'

class MyModal extends Component{
   render(){
      const { text, onRequestClose } = this.props;
      const styles = {
        padding: '15px',
        textAlign: 'center'
      }
      const styles2 = {
        margin: '15px'
      }

      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.Newspaper}>
            <h2 style={styles}>{text}</h2>
            <button style={styles2} onClick={ModalManager.close}>Close Modal</button>
         </Modal>
      );
   }
}

export default MyModal
