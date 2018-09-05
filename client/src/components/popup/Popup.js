import React, { Component } from "react";

import TextInput from "./../inputFields/inputField";
import Button from "./../buttons/Button";


class Popup extends Component {
	merchantDetails = () => {
		this.props.history.push("/merchant-details")
	}
    render() {
      return (
		<div className="modal fade">
			<div className="modal-dialog">
				<div className="modal-content">
					<ModalHeader title={this.props.modalHeader}/>
					<ModalBody content = {this.props.modalBody} />
					<ModalFooter buttonName = {this.props.modelFooterText}/>
				</div>
			</div>
      </div>
      );
    }
}

class ModalHeader extends Component {

    render() {
      return (
		<div className="modal-header">
			{this.props.title}
			<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
      );
    }
}

class ModalBody extends Component {

    render() {
      return (
		  <div className="modal-body">
			  {this.props.content}
			  <TextInput type="password" value="" id="otp"/>
			  <Button buttonClass="btn btn-primary" onClick={this.merchantDetails} buttonName="Submit"/>
		  </div>
      );
    }
}

class ModalFooter extends Component {

    render() {
      return (
		  <div className="modal-footer">
			<button type="button" className="btn btn-primary">{this.props.buttonName}</button>
		  </div>
      );
    }
}


export default Popup;