import React, { Component } from "react";

const defalutProps = {
  inputType: "text"
}

class inputField extends Component {

    render() {
      return (
          <input type={this.props.inputType} value={this.props.value} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder}/>
      );
    }
}

inputField.defalutProps = defalutProps;


export default inputField;
