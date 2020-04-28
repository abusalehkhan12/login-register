import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../css files/nav.css'
class nav extends Component {
    render() {
        return (
            <div className="nav">
                 <ul className="nav-list">
                    <li className="list">
                       <Link to="/">Login</Link>
                    </li>
                    <li className="list">
                       <Link to="/Register">Register</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default nav
