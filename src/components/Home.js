import React, { Component} from 'react';
import Search from "./Search";


//MAP sobre JSON
class Home extends Component{

	render(){
		return (
			<Search file = {this.props.file}/>
			);
	}
}
export default Home;


