import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
//import $ from 'jquery';

import TextInput from "./../../../components/inputFields/inputField";
import Button from "./../../../components/buttons/Button";
import Popup from "./../../../components/popup/Popup";

class EnrollMerchant extends Component {
	otpReceive = () => {
		var object = ReactDOM.findDOMNode(this.refs.modal);
		//$(this.refs.modal.getDOMNode()).modal();
		console.log(object);
		this.props.history.push("/merchant-details")
	}
	

    render() {
      return (
          <div>
              Enroll Merchant
			  <TextInput value="" id="merId"/>
			  <Button buttonClass="btn btn-primary" onClick={this.otpReceive} buttonName="Next Step"/>
			  <Popup ref="modal" />
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EnrollMerchant);
