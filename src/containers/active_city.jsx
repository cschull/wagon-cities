import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class ActiveCity extends Component {
  render () {
    if (!this.props.selectedCity) {
      return (
         <div className="active-city">
          <h4>select a city...</h4>
        </div>
      );
    }
    return (
      <div className="active-city">
        <h4>{this.props.selectedCity.name}</h4>
        <p>{this.props.selectedCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`} style={{width: "100%"}}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
