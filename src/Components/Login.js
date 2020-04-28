import React, { Component } from 'react'
import Profile from './profile'
import axios from 'axios'
import {BrowserRouter as Router,Route} from 'react-router-dom'

 class Login extends Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:"",
            data:[],
            m:""
        }
        this.onchange=this.onchange.bind(this);
        this.onsubmit=this.onsubmit.bind(this);
    }
    onchange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onsubmit(e){
        e.preventDefault()
        const user={
            email:this.state.email,
            password:this.state.password,
        }
        console.log(user)
        axios.post('http://localhost:5000/login',user)
        .then(res =>{
            this.state.m=res.data
            if (this.state.m ==="access"){
                this.state.m='true'
                alert('access')
                axios.post('http://localhost:5000/profile',user)
                .then(res =>{
                    this.state.data=res.data
                    console.log(this.state.data)
                })
            }
            else{
                alert('Invalid Username or Password')
            }
        })
    }
    render() {
        if (this.state.m=="access"){
            let url="http://localhost:3000/profile"
            window.location=url
        }
        return (
            <div className="login" style={{display: this.state.m=='true'? 'none' :'block'}}>
                <h1 className="header">LOGIN PAGE</h1><hr/>
                <form onSubmit={this.onsubmit}>
                <div>
                    <h2>Email</h2>
                    <input type="text"
                       placeholder="email"
                       name="email"
                       onChange={this.onchange}
                       className="box"
                    />
                </div><hr/>
                <div>
                    <h2>Password</h2>
                    <input type="password"
                       placeholder="password"
                       onChange={this.onchange}
                       name="password"
                       className="box"
                    />
                </div><br /><hr/>
                <button className="button">Login</button>
                </form>
                <Router>
                   <Route path='/profile' key={this.state.data[0]}
                   component={Profile} />
                </Router>
            </div>
        )
    }
}

export default Login
