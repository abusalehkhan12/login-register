import React, { Component } from 'react'

class profile extends Component {
    constructor(props){
        super(props)
        console.log(this.props.key)
    }
    render() {
        return (
            <div className="profile">
                <div>
                    <p>{this.props.key}</p>
                </div>
                <div>
                    <p>{this.props.key}</p>
                </div>
                <div>
                    <p>{this.props.key}</p>
                </div>
                <div>
                    <p>{this.props.key}</p>
                </div>
            </div>
        )
    }
}

export default profile
