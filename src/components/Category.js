import React from 'react'
import Group from './Group'
class Category extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showRelated: false
        }
        this.showRelated = this.showRelated.bind(this)
    }
    showRelated(){
        this.setState({
            showRelated: true
        })
    }
    render(){
        return(
            <ul className="menu-category">
                <li>
                    <Group group={this.props.category} showRelated={this.showRelated} />
                    {this.props.category.related.length > 0 &&
                    <ul className={this.state.showRelated?'active':'hidden'}>
                        <h4>You may also want:</h4>
                        {
                            this.props.category.related.map((related, index) =>(
                                <Group group={related} key={index}/>
                            ))
                        }
                    </ul>
                    }
                </li>
            </ul>
        )
    }
}

export default Category