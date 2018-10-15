import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '4af9f0423c783d562c379290de2b4401'; 

class App extends Component {
  
  state = {
    temp: '',
    city: '',
    country: '',
    error: ''
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temp: parseInt((data.main.temp) - 273) + '°C'
    });
    console.log(this.state.temp + ' ' + this.state.city);
  }
  render() {
    return (
      <div> 
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
