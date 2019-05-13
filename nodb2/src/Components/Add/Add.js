import React, { Component } from 'react';
import './Add.css';
// import ElectedOfficial from '../ElectedOfficial/ElectedOfficial';


export default class Add extends Component {
    constructor() {
        super()
        this.state= {
            name: '',
            position: '',
            imageUrl: '',
            state: '',
            about: ''
        }
    }

    handleChange = e => {
        e.preventDefault()
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        let official = this.state
        console.log(this.state)
        
        this.props.createLegislature(official)
    }
    
   

    render() {
        return (
            <div className="electedOfficialContainer">
            <h2> Create Your Own Legislature </h2>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 20}}>
            <div className="addForm">
                <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
                <input type="text" name="imageUrl" placeholder="imageUrl" onChange={this.handleChange}/>
                <input type="text" name="position" placeholder="position" onChange={this.handleChange}/>
                <input type="text" name="state" placeholder="state" onChange={this.handleChange}/>
                <input type="text" name="about" placeholder="about" onChange={this.handleChange}/>
            </div>
                <br />
                <button className="findBtn" onClick={this.handleClick}>Create Your Representative</button>
            </div>
                
    
            </div>
        )
    }
}
