import React, { Component } from 'react';
import '../styles/iss.css'
import Axios from 'axios';

class ISS extends Component {
    constructor() {
        super();
        this.state = {
            lat: '',
            long: ''
        }
    }

    componentDidMount() {
        this.getLocation()
    }

    getLocation = () => {
        Axios
            .get('http://api.open-notify.org/iss-now.json')
            .catch()
            .then(response => {
                // console.log(response)
                this.setState({
                    lat: response.data.iss_position.latitude,
                    long: response.data.iss_position.longitude
                })
            })
    }

    render() {
        const {long, lat} = this.state;
        const {getLocation} = this;
        return (
            <div className='iss_page'>
                <h2>Where is the International Space Station?</h2>
                <main className='iss_content'>
                    <button onClick={getLocation}>Locate</button>
                    <h3>At: time goes here</h3>
                    <h3>Latitude: {lat}</h3>
                    <h3>Longitude: {long}</h3>
                </main>
            </div>
        )
    }
}

export default ISS;