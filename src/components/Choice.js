import React from 'react'

class Choice extends React.Component {
    render(){
        return (
            <li>
                <input type="radio" value={this.props.choice.name}/>{this.props.choice.name}
            </li>
        )
    }
}

export default Choice