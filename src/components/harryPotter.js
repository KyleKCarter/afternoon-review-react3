import React, {Component} from 'react';
import './../styles/harryPotter.css';
import Axios from 'axios';

class HarryPotter extends Component {
    constructor() {
        super();
        this.state = {
            house: ''
        }
    }

    getQuote = () => {
        Axios
            .get('https://www.potterapi.com/v1/sortingHat')
            .then(response => {
                console.log(response)
                this.setState({ house: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className='hp_page'>
                <h2>Hogwarts Sorting Hat</h2>
                <main className='hp_content'>
                    <button onClick={this.getQuote}>Find Out Your House</button>
                    <h3>{this.state.house}</h3>
                </main>
            </div>
        )
    }
}

export default HarryPotter;