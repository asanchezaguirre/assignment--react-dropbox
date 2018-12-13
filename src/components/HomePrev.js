import React, {Component} from 'react';
import HomeList from "./HomeList";

class HomePrev extends Component{
	render(){
		return (
			<ul>
			    { 
			    	this.props.newFile.map(function(datos){
             			return <HomeList name = {datos.name} 
             							date = {datos.added_at}
             							type = {datos.category}
             				    />
            })
        }    
			</ul>
		);
	}
}

export default HomePrev;