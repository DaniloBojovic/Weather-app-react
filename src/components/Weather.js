import React, { Component } from 'react';

// class Weather extends Component {
//     render(){
//         return(
//             <div>
//                 {this.props.temp && <p>Temperature: {this.props.temp}</p>}
//                 {this.props.country && <p>Country code: {this.props.country}</p>}
//                 {this.props.description && <p>Description: {this.props.description}</p>}
//                 {this.props.error && <p>{this.props.error}</p>}
//             </div>
//         );
//     }
// }

const Weather = (props) => (
    < div >
        {props.temp && <p>Temperature: {props.temp}</p>}
        {props.country && <p>Country code: {props.country}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div >
);


export default Weather;