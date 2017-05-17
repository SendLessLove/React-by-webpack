import React from 'react';

export default class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focusStyle: '',
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

  buttonHandler() {
    const value = this.state.value;
    if(value.trim()) {
      this.props.submitFn(value);
      this.setState({ value: '' });
    }
  }

  focusHandler() { this.setState({ focusStyle: 'on' }); }

  blurHandler() { this.setState({ focusStyle: '' }); }

  render() {
    return (
      <div className="addTodoBox">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.keyUpHandler.bind(this)}
          onFocus={this.focusHandler.bind(this)}
          onBlur={this.blurHandler.bind(this)}
          className={this.state.focusStyle}
          placeholder="准备做什么?"
        />
        <input
          className={this.state.focusStyle}
          type="submit"
          value="添 加"
          onClick={this.buttonHandler.bind(this)}
        />
      </div>
    );
  }
}