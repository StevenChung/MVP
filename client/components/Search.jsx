import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'zubat',
      lat: `37.798307`,
      lng: `-122.408013`
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          className="search-bar-pokemon-name"
          defaultValue={`please, baby... no more zubats in my way`}
          onChange={(event) => {
            this.setState({
              value: event.target.value
            });
          }}
        />
        <input
          type="text"
          className="latlng"
          defaultValue={`lat`}
          onChange={(event) => {
            console.log(event.target.value);
            this.setState({
              lat: event.target.value
            });
          }}
        />
        <input
          type="text"
          className="latlng"
          defaultValue={`lng`}
          onChange={(event) => {
            console.log(event.target.value);
            this.setState({
              lng: event.target.value
            });
          }}
        />
        <button type="submit" onClick={() => {
            this.props.searchValue(this.state.value, this.state.lat, this.state.lng);
          }}>Submit</button>
      </div>
    );
  }
};


// form that takes button click/enter
export default SearchBar;
