import React, { Component } from 'react';

class CityList extends Component {

  renderList = () => {
    const city_list = this.props.cities.map ( city =>
      <div className="list-group-item" key={city.address}>
        <h4>{city.name}</h4>
      </div>
      );
    return (city_list);
  }

  render () {
    return (
        <div className="cities">
          {this.renderList()}
        </div>
      );
  }
}

export default CityList;
