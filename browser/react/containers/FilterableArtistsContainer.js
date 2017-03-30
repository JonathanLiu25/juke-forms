import React from 'react'
import Axios from 'axios'
import FilterInput from '../components/FilterInput'
import Artists from '../components/Artists'

export default class FilterableArtistsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      artists: [],
      selectedArtists: []
    }
    this.changeInput = this.changeInput.bind(this)
  }

  componentDidMount() {
    Axios.get('/api/artists')
      .then(res => res.data)
      .then(artists => this.setState({
        artists: artists,
        selectedArtists: artists
      }))
  }

  changeInput(event) {
    const value = event.target.value
    this.setState({
      input: value,
      selectedArtists: this.state.artists.filter(artist => artist.name.includes(value))
    })
  }

  render() {

    return (
      <div>
        <FilterInput eventHandler={ this.changeInput } />
        <Artists artists={ this.state.selectedArtists } />
      </div>
    )
  }
}
