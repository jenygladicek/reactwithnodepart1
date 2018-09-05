import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../../components/buttons/Button";
import TextInput from "./../../../components/inputFields/inputField";

class AddMerchantDetails extends Component {
	addMerchantCard = ()=>{
		this.props.history.push("/agreement");
	}
    render() {
      return (
		<div className="container">
          <div className="row">
			<div className="col-md-6">
              Add Merchant Details
			  <div><TextInput type="text" defaultValue="Business Name : XYZ Solutions" id="bussinessName"/></div>
			  <div><textarea rows="2" id="businessAddress" defaultValue="NO2, First Cross,Arnald Street,Ls"></textarea></div>
			</div>
			<div className="col-md-6">
              Add Merchant Details
			  <div><TextInput type="text" defaultValue="Peter" id="ownerFistName"/></div>
			  <div><TextInput type="text" defaultValue="12345" id="merId"/></div>
			  <div><TextInput type="text" defaultValue="023423434246" id="businessPhone"/></div>
			</div>
          </div>
		  <div className="row">
			<div className="col-md-6">
				<div><label>Enter Card Details</label></div>
				<label>Card Holder Name:<TextInput type="text"  id="cardHolderName"/></label>
				<label>Card Number:<TextInput type="text"  id="cardNumber"/></label>
				<label>Expiration Date:<TextInput type="text"  id="expDate"/>"/"<TextInput type="text"  id="expDate"/></label>
				<label>Cvv:<TextInput type="text"  id="cvv"/></label>
			</div>
			<div className="col-md-6">
			    <div><label className="checkbox-inline"><input type="checkbox" defaultValue=""/>Use Business Address</label></div>
				<label>Billing Adress Line1:<TextInput type="text"  id="billingAdd1"/></label>
				<label>Billing Adress Line2:<TextInput type="text"  id="billingAdd2"/></label>
				<label>City:<TextInput type="text"  id="city"/></label>
				<label>State:<TextInput type="text"  id="state"/>Zip:<TextInput type="text" id="zip"/></label>
			</div>	
		  </div>
		  <div className="row">
			<Button buttonClass="btn btn-primary" onClick={this.addMerchantCard} buttonName="Submit"/>
		  </div>
		</div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddMerchantDetails);
