import React, { Component } from 'react';

class City extends Component {
  render () {
    let src = ``
    return (
        <div className="active-city">
          <h4>{this.props.selectedCity.name}</h4>
          <p>{this.props.selectedCity.address}</p>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`} style={{width: "100%"}}/>
        </div>
      );
  }
}

export default City;
