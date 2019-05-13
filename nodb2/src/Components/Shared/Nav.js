import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
    

    toggleView = (e) => {
        e.preventDefault()
        this.setState({
    
        })
    }

    render(){
        return (

            <div className="navBar">
                <div id="menuToggle">
                    <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                            <ul id="menu">
                                <button className="btn" onClick={this.props.toggleBack}>Home</button>
                                <button className="btn" onClick={this.props.toggleSearch}>Search</button>
                                <button className="btn" onClick={this.props.toggleCreate}>Custom</button>
                            </ul>
                </div>
            </div>
        )
    }   
}