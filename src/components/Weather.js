import React, { Component } from 'react';

class Weather extends Component {
    render(){
        return(
            <div>
                {this.props.temp}
            </div>
        );
    }
}

export default Weather;