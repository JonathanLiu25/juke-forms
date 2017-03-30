import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      inputValue: '',
      buttonDisabled: true,
      alertText: '',
      alertClassName: '',
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(event) {
    const value = event.target.value
    if (value.length > 16 || value === '') {
      this.setState({
        buttonDisabled: true,
        alertText: 'Please enter a valid playlist title :)',
        alertClassName: 'alert alert-warning',
        userInput: value,
        inputValue: value,
      })
    } else {
      this.setState({
        buttonDisabled: false,
        alertText: '',
        alertClassName: '',
        userInput: value,
        inputValue: value,
      })
    }
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.postPlaylist(this.state.userInput);
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <div>

        <NewPlaylist
          submitHandler={this.submitHandler}
          inputHandler={this.inputHandler}
          inputValue={this.state.inputValue}
          buttonDisabled={this.state.buttonDisabled}
          alertText={this.state.alertText}
          alertClassName={this.state.alertClassName}
        />
      </div>
    )
  }
}
