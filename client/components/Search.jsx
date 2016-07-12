import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'zubat'
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          defaultValue={`please, baby... no more zubats in my way`}
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
