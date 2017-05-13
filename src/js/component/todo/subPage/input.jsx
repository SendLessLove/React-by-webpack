import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  keyUpHandler(e) {
    const value = this.state.value
    if (e.keyCode === 13 && value.trim()) {
      this.props.submitFn(value);
      this.setState({ value: '' });
    }
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onKeyUp={this.keyUpHandler.bind(this)}
      />
    );
  }
}