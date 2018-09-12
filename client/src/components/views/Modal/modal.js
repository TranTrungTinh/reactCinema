import React from 'react'
import Modal from 'react-responsive-modal';
import './modal.css';

import FacebookButton from '../../../utils/FacebookButton';
import GoogleButton from '../../../utils/GoogleButton';

export default (props) => {
  return (
    <Modal 
      open={props.open} 
      onClose={props.onCloseModal} 
      showCloseIcon={true}
    >
      <div className="modal">
        <div className="modal-header">
          <h2>Log In To ReactCinema</h2>
        </div>
        <div className="modal-body">
          <FacebookButton />
          <GoogleButton />
        </div>
        <div className="modal-divider"></div>
        <div className="modal-form">
          <div className="form-row">
            <label>Email</label>
            <div className="form-input">
              <input type="email" name="username" placeholder="Email" autoComplete="email" required />
            </div>
          </div>
          <div className="form-row">
            <label>Password</label>
            <div className="form-input">
              <input type="password" name="password" placeholder="Password" maxLength="256" required />
            </div>
          </div>
          <button>LOG IN</button>
        </div>
        <div className="modal-footer">
          <p>Not a member yet? <a href=".#">Sign up</a></p>
        </div>
      </div>
    </Modal>
  );
}

