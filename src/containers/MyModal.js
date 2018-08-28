import React, { Component } from 'react';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import Button from '@material-ui/core/Button';
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
            <Button id="modalbutton" style={styles2} onClick={ModalManager.close}>Close Modal</Button>
         </Modal>
      );
   }
}

export default MyModal
