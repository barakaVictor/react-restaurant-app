import React from 'react'

class Group extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: false,
        }
        this.toggleNested = this.toggleNested.bind(this)
    }
    toggleNested(){
        this.setState({
            selected: !this.state.selected
        })
    }
    render(){
        return (
            <ul>
                <li>
                    <span><input type="radio" onClick={this.toggleNested} value={this.props.group.name} />{this.props.group.name}</span>
                    <ul className={this.state.selected?'active':'hidden'}>
                        {
                            this.props.group.choices.map((choice, index) => (
                                <li>
                                    <input type="radio" value={choice.name} onClick={this.props.showRelated} />{choice.name}
                                </li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        )
    }
}

export default Group