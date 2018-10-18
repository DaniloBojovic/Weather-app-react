import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '4af9f0423c783d562c379290de2b4401';

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();

    if (city && country) {
      console.log('true?');
      console.log(data);
      this.setState({
        temp: parseInt((data.main.temp) - 273) + '°C',
        country: data.sys.country,
        description: data.weather[0].description,
        error: ''
      });
    } 
    else {
      this.setState({
        temp: undefined,
        country: undefined,
        description: undefined,
        error: 'Please enter the fuckin values...'
      });
    }
    // else{
    //   console.log('not true?');
    //   this.setState = ({
    //     temp: undefined,
    //     country: undefined,
    //     description: undefined,
    //     error: 'Please enter the fuckin values...'
    //   });
    // }
  }
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temp={this.state.temp}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
