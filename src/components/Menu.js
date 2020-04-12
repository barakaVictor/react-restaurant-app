import React from 'react'
import APIClient from '../APIClient'
import Category from './Category'
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu: []
        };
    }

    componentDidMount(){
        APIClient.getData()
        .then(response =>{
            this.setState({
                menu: response.data
            })
        })
    }

    render(){
        return (
            <div className="menu">
                {
                    this.state.menu.map((category, index)=>(
                        <Category category={category} key={index} />
                    ))
                }
            </div>
        )   
    }
}

export default Menu