import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterUser extends Component {

    render() {
      return (
		<div>User Registration</div>
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
