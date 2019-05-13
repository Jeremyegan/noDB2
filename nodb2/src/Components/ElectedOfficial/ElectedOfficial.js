import React, { Component } from 'react';
import axios from 'axios';
import './ElectedOfficial.css'


export default class ElectedOfficial extends Component {
    constructor(props) {
        super(props)
        this.state= {
            id: props.official.id,
            imageUrl: props.official.imageUrl,
            name: props.official.name,
            position: props.official.position,
            state: props.official.state,
            about: props.official.about,
            edit: false

        }
    }

    componentDidMount() {
        axios.get('/api/legislatures').then((res) => {
            this.setState({
                officials: res.data
            })
            console.log("res=", res.data)
        })
    }

    toggleEdit = (e) => {
        e.preventDefault()
        this.setState({
            edit: true
        })
    }


    handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
      
            this.setState({
                [name]: value
            })
    }

    handleDeleteClick = () => {
        this.props.handleDelete(this.state)
        this.setState({
            edit: false
        })
    }


    handleUpdateClick = () => {
        this.props.handleUpdate(this.state)
        this.setState({
            edit: false
        })
    }

    handleInput = (val) => {
        this.setState({
            input: val
        })
    }



    render() {
            return this.state.edit ? (
                <div className="legContainer">
                <div className="legCard">
                    <div>
                        <img className="photo" alt="Legislature" src={this.state.imageUrl} />
                        <h3>{this.state.name}</h3>
                    </div>
                        <div className="editInput">
                            <input value={this.state.imageUrl} type="text" name="imageUrl" onChange={this.handleChange} />
                            <input value={this.state.name} type="text" name="name" onChange={this.handleChange} />
                            <input value={this.state.position} type="text" name="position" onChange={this.handleChange} />
                            <input value={this.state.state} type="text" name="state" onChange={this.handleChange} />
                            <input value={this.state.about} type="text" name="about" onChange={this.handleChange} />
                            <br />
                            <button className="Btn" onClick={this.handleUpdateClick}>Update</button>
                        </div>
                    </div>
                </div>
                ) : (
                <div className="legContainer">
                    <div key={this.state.name} className="legCard">
                    <div>
                        <img className="photo" alt="Legislature" src={this.state.imageUrl} />
                        <h3>{this.state.name}</h3>
                    </div>
                    <li key="i">
                        <h3>{this.state.position}</h3>
                        <p>{this.state.state}</p>
                        <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '20em', color: 'black'}}>{this.state.about}</span>
                        <br /><br />
                        <div className="editBtn">
                            <button className="Btn" onClick={this.toggleEdit} id={this.state.id}>Edit</button>
                            <button className="Btn" onClick={this.handleDeleteClick}>Delete</button>
                        </div>
                    </li>
                </div>
             </div>  
        )
    }
}