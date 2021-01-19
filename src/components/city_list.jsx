import React, { Component } from 'react';
import City from './city';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index';


class CityList extends Component {

  renderList = () => {
    const city_list = this.props.cities.map ( city =>
      <City city={city} key={city.name} />
    );
    return (city_list);
  }

  render () {
    return (
        <div className="cities">
          {console.log(this.props.cities)}
          {this.renderList()}
          }
        </div>
      );
  }
};

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
