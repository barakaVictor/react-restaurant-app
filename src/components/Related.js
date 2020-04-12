import React from 'react'
import Choice from './Choice'
class Related extends React.Component {
    render () {
        return (
            <ul>
                <li>
                    <span><input type="radio" value={this.props.related.name} />{this.props.related.name}</span>
                    <ul className="nested">
                    {
                        this.props.related.choices.map((choice, index) =>(
                            <Choice choice={choice} key={index}/>
                        ))
                    }
                    </ul>
                </li>
            </ul>
        )
    }
}

export default Related