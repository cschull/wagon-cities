import React from 'react';
import CityList from './city_list';
import ActiveCity from '../containers/active_city';


// const App = () => {
//   return (
//     <div className="app">
//       <p>React + Redux starter</p>
//     </div>
//   );
// };

// export default App;

const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];

const App = () => {
  return (
    <div className="app">
      <CityList cities={cities} />
      {console.log(cities[0].name)}
      <ActiveCity selectedCity={cities[0]} />
    </div>
  );
};

export default App;
