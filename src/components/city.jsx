import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import setCities from '../actions/index';


class City extends Component {

  handleClick = () => {
    this.props.setCities(this.props.city);
    console.log(this.props.selectedCity);
  }

  render() {
    return (
      <div
        className="list-group-item"
        key={this.props.city.address}
        onClick={this.handleClick}>
        <h4>{this.props.city.name}</h4>
      </div>
    );
  }
}

// to be able to dispatch the new state
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities : setCities }, dispatch );
}

// to read the new state
function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
