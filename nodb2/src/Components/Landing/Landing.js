import React, { Component } from 'react';
import './Landing.css';
import Nav from './../Shared/Nav';
import Search from '../ElectedOfficial/ElectedOfficial';
import Add from '../Add/Add';
import axios from 'axios';

export default class Landing extends Component {
    constructor() {
        super()
        this.state= {
            officials: [],
            landingView: true,
            searchView: false,
            addView: false,
            id: ''
        }
    }

    componentDidMount() {
        axios.get('/api/legislatures').then((res) => {
            this.setState({
                officials: res.data
            })
        })
    }

    handleReadByState = (e) => {
        e.preventDefault()
        axios.get(`/api/legislature?state=${this.state.id}`).then((res) => {
            this.setState({
                officials: res.data
            })
        })
    }

    handleChange = e => {
        e.preventDefault()
        let { name, value } = e.target
      
            this.setState({
                [name]: value
            })
    }

    handleInput = (val) => {
        this.setState({
            id: val
        })
    }

    handleUpdate = official => {
        axios.put(`/api/legislature/${official.id}`, official).then(res => {
            this.setState({
                officials: res.data
            })
        }).catch(console.log("Could not update"))
    }


    handleDelete = officials => {
        axios.delete(`/api/legislature/${officials.id}`, officials).then(res => {
            this.setState({
                officials: res.data
            })
        }).catch(err => console.log('Could not delete legislature', err))
    }

    createLegislature = official => {
        axios.post(`/api/legislature`, official).then(res => {
            this.setState({
                officials: res.data
            })
        }).catch(err => {
            console.log('Could not create legislature', err)
        })
    }


    toggleSearch = (e) => {
        e.preventDefault()
        this.setState({
            searchView: true,
            landingView: false,
            addView: false
        })
    }

    toggleBack = (e) => {
        e.preventDefault()
        this.setState({
            landingView: true,
            searchView: false,
            addView: false
        })
    }

    toggleCreate = (e) => {
        e.preventDefault()
        this.setState({
            addView: true,
            landingView: false,
            searchView: false
        })
    }

    toggleEdit = (e) => {
        console.log(e.target.id)
        e.preventDefault()
        this.setState({
            id: e.target.id,
            addView: false,
            landingView: false,
            searchView: false
        })
    }

    render(){
       return this.state.landingView ? (
            
           <div className="landing">
                <Nav toggleSearch={this.toggleSearch} toggleBack={this.toggleBack} toggleCreate={this.toggleCreate}/>
               <h1>Civic<span className="span1">(</span>ish<span className="span1">)</span></h1>
               
               <button className="findBtn" onClick={this.toggleSearch}>Find your legislatures</button>
           </div>

        ) :  this.state.searchView ? (

           <div className="AddView">
                <Nav toggleSearch={this.toggleSearch} toggleBack={this.toggleBack} toggleCreate={this.toggleCreate}/>
                <div className="form1">
                <form>
                        <label> What state do you live in? </label>
                            <div className="stateSearch">
                            <input type="text" className="stateInput" onChange={(e) => this.handleInput(e.target.value)} value={this.state.id} />
                            <button className="findBtn" onClick={this.handleReadByState}>Search</button>
                            </div>
                </form>
                </div>
                    <h2>Your Respresentatives</h2>
                <div className="repContainer">{this.state.officials.map(official => {
                    return <Search 
                    key={official.id} 
                    official={official} 
                    handleUpdate={this.handleUpdate} 
                    handleDelete={this.handleDelete} 
                    toggleEdit={this.toggleEdit}/>
                })}
               </div>
           </div>
        
        ) : (

            <div>
                <Nav toggleSearch={this.toggleSearch} toggleBack={this.toggleBack} toggleCreate={this.toggleCreate}/>
                <Add officials={this.state.officials} createLegislature={this.createLegislature} />
            </div>
        ) 
    }

} 