import React from 'react';
import '../styles/chuckNorris.css';
import Axios from 'axios';

class ChuckNorris extends React.Component {
    constructor() {
        super();
        this.state = {
            fact: ''
        }
    }

    getFact = () => {
        Axios.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
                // console.log(response.data.value)
                this.setState({ fact: response.data.value})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className='chuck_norris_page'>
                <h2>Chuck Norris Fact</h2>
                <main className='chuck_content'>
                    <button onClick={this.getFact}>Fact</button>
                    <h3>{this.state.fact}</h3>
                </main>
            </div>
        )
    }
}

export default ChuckNorris;