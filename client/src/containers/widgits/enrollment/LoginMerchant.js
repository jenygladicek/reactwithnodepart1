import React, { Component } from 'react';
import { connect } from 'react-redux';


class LoginMerchant extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}
	
    handleSubmit = (event) => {
		event.preventDefault();
		
		const data = {
			username: this.state.username,
			password: this.state.password
		}
		console.log(data);
		fetch('http://localhost:5000/user/signin', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		}).then(function(response){
			console.log(response);
		},function(err){
			
		});
	}
	
	handleUsername = (event) => {
		this.setState({
			username: event.target.value
		});
	}
	
	handlePassword = (event) => {
		this.setState({
			password: event.target.value
		});
	}
	
    render() {
      return (
          <form onSubmit={this.handleSubmit}>
			  <input type="text" name="userName" placeholder="Username" value={this.state.username} onChange={this.handleUsername}/>
			  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
			  <button className="btn btn-primary">Login</button>	 
          </form>
		 
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginMerchant);
