import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Santosh'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Santosh Gurung'
            })
        }, 2000)
    }
    
    render() {
        console.log("*****************parent comp render*******************")
        return (
            <div>
                Parent Component 
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
