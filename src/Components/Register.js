import React, { Component } from 'react'
import axios from 'axios'

 class Register extends Component {
    constructor(){
        super()
        this.state={
             fname:"",
             lname:"",
             email:"",
             password:"",
             contact:"",
             image:''
        }
        this.onsubmit=this.onsubmit.bind(this)
        this.onchange=this.onchange.bind(this)
    }
     onchange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onsubmit(e){
        e.preventDefault()

        const register={
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            password:this.state.password,
            contact:this.state.contact,
            image:this.state.image
        }
        console.log(register)
        axios.post('http://localhost:5000/register', register)
        .then(res =>
            {
                if(res){
                   alert('registered')}
                else{
                    alert('error')
                }
            })
    }
    render() {
        return (
            <div>
                <h1 className="header">REGISTER</h1><hr/>
                <form onSubmit={this.onsubmit}>
                <div>
                    <h2>First Name</h2>
                    <input type="text"  placeholder="FName" name="fname" className="box" onChange={this.onchange}/>
                </div><hr/>
                <div>
                    <h2>Last Name</h2>
                    <input type="text"  placeholder="LName" name="lname" className="box" onChange={this.onchange}/>
                </div><hr/>
                <div>
                    <h2>Email</h2>
                    <input type="text" placeholder="email" name="email" className="box" onChange={this.onchange}/>
                </div><hr/>
                <div>
                    <h2>Contact</h2>
                    <input type="text" placeholder="Contact" name="contact" className="box" onChange={this.onchange}/>
                </div><hr/>
                <div>
                    <h2>Image</h2>
                    <input type="file" name="image" onchange={this.onchange} />
                </div><hr/>
                <div>
                    <h2>Password</h2>
                    <input type="password" placeholder="Password" name="password" className="box" onChange={this.onchange}/>
                </div><br /><hr/>
                <button className="button">Register</button>
                </form>
            </div>
        )
    }
}

export default Register
