import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'ZUBAT'
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          defaultValue={this.state.value}
          onChange={(event) => {
            this.setState({
              value: event.target.value
            });
          }}
        />
        <button type="submit" onClick={() => {
            this.props.searchValue(this.state.value);
          }}>Submit</button>
      </div>
    );
  }
};


// form that takes button click/enter
export default SearchBar;
