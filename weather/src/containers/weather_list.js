import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {
    if(cityData.cod === '404')
        return;

    let name = cityData.city.name;
    let temps = cityData.list.map(weather => weather.main.temp);
    let pressures = cityData.list.map(weather => weather.main.pressure);
    let humidities = cityData.list.map(weather => weather.main.humidity);
    //let lon = cityData.city.coord.lon;
    //let lat = cityData.city.coord.lat;
    let { lon, lat } = cityData.city.coord;

     return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="blue" units="°C"/></td>
        <td><Chart data={pressures} color="orange" units="hPa"/></td>
        <td><Chart data={humidities} color="green" units="%"/></td>
        <td><GoogleMap lon={lon} lat={lat} /></td>
      </tr>
     );
  }

  render() { 
    return (
      <table className="table table-hover">
      	<thead>
      		<tr>
      			<th>城市</th>
      		  <th>温度 (°C)</th>
            <th>气压 (hPa)</th>
            <th>湿度 (%)</th>
            <th>地图 </th>
          </tr>
      	</thead>
      	<tbody>
          {this.props.weather.map(this.renderWeather)}
      	</tbody>
      </table>
    );
  }
}


function mapStateToProps(state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);