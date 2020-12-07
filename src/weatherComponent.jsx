import React from "react";
import axios from 'axios';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      icon: undefined,
      main: undefined,
      celsius: undefined,
      max: null,
      min: null,
      description: "",
      error: false
    };
  }

  getWeatherIcon(id) {
    if (id >= 200 && id < 232)
      this.setState({ icon: "10d" });
    if (id >= 300 && id <= 321)
      this.setState({ icon: "10d" });
    if (id >= 500 && id <= 521)
      this.setState({ icon: "10d" });
    if (id >= 600 && id <= 622)
      this.setState({ icon: "13d" });
    if (id >= 701 && id <= 781)
      this.setState({ icon: "50d" });
    if (id===800)
      this.setState({ icon: "01d" });
    if (id >= 801 && id <= 804)
    this.setState({ icon: "03d" });
  }

  getCel(temp) {
    let convertedTemp = Math.floor(temp - 273.15);
    return convertedTemp;
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=cf4565a3c9884f0af30775bcb0bf3132`)
    .then(res => {
        const weather = res.data;
        this.setState({ weather });
        console.log(weather);

        this.setState({
          celsius: this.getCel(weather.main.temp),
          max: this.getCel(weather.main.temp_max),
          min: this.getCel(weather.main.temp_min),
          description: weather.weather[0].description,
        })
        this.getWeatherIcon(weather.weather[0].id)
    })
  }


  render (){
    const container = {background: 'lightGreen'};
    
    return(
    <div style={container}>
     <h1> Hello, here is your weather report for Toronto.</h1>
    <h1>It is {this.state.celsius} celsius today.</h1>
    <h2>Temperatures range bewtween {this.state.min} and {this.state.max}</h2>
    <h2>.. and it can be described as: {this.state.description}</h2>
    <p><img src={"http://openweathermap.org/img/wn/"+this.state.icon+"@2x.png"}></img></p>
    <h3>Thank you!</h3>
      </div>);
    
  }
}