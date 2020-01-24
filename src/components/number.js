import React, { Component } from 'react'
import '../styles/number.css';
import Axios from 'axios';

class Number extends Component {
    constructor() {
        super();
        this.state = {
            num: 0,
            trivia: ''
        }
    }

    handleChange = (e) => {
        this.setState({num: e.target.value})
    }

    getTrivia = () => {
        Axios
            .get(`http://numbersapi.com/${this.state.num}`)
            .then(response => {
                // console.log(response)
                this.setState({ trivia: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='number_page'>
                <h2>Number Trivia</h2>
                <main className='number_content'>
                    <section className='number_input_section'>
                        <input type="text" onChange={this.handleChange} />
                        <button onClick={this.getTrivia}>Search</button>
                    </section>
                    <h3>{this.state.trivia}</h3>
                </main>
            </div>
        )
    }
}

export default Number;