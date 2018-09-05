import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../../components/buttons/Button";

class Agreement extends Component {
	addSuccess = () => {
		this.props.history.push("/enrollment-success");
		console.log(this.refs.iAccept);
	}
    render() {
      return (
          <div className="container">
             Funds Advance Agrrement
			 <div><textarea className="form-control" rows="10" id="agreement" defaultValue="agreement Content"></textarea></div>
			 <div><label className="checkbox-inline"><input type="checkbox" id="iAccept" ref="iAccept"/>I accept Terms & Conditions</label></div>
			 <div><Button buttonClass="btn btn-primary" onClick={this.addSuccess} buttonName="Submit" disableoption={false}/></div>
          </div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

Agreement.defalutProps = this.defalutProps;
export default connect(mapStateToProps, mapDispatchToProps)(Agreement);
