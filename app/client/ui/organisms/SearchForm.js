import React, { Component } from "react";
import { connect } from "react-redux";
import SearchInput from "../molecules/SearchInput";
import { searchQuery } from "../../state/search/actions";

const mapDispatchToProps = {
  searchQuery
};

class Search extends Component {
  state = {
    query: ""
  };

  updateQuery = event => {
    this.setState({
      query: event.target.value
    });
  };

  searchGames = event => {
    event.preventDefault();
    this.props.searchQuery(this.state.query);
  };

  render() {
    return (
      <SearchInput
        onSubmit={this.searchGames}
        onChange={this.updateQuery}
        value={this.state.query}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Search);