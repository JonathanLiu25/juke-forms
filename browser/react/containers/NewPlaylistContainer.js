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
        userInput: value,
        inputValue: value,
        alertText: 'Please enter a valid playlist title :)',
        alertClassName: 'alert alert-warning'
      })
    } else {
      this.setState({
        buttonDisabled: false,
        userInput: value,
        inputValue: value,
        alertText: '',
        alertClassName: ''
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
  // postPlaylist() {
  //   axios.post('/api/playlists/', {name: this.state.userInput})
  //     .then(res => res.data)
  //     .then(result => {
  //       console.log(result) // response json from the server!
  //     });
  // }
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
