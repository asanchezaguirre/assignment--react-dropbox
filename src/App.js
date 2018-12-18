import React, { Component } from 'react';
import Home from "./components/Home";
import Sidebar from "./components/Sidebar"



class App extends Component {
  render() {
    return (
        <React.Fragment>	
         	<Sidebar />
      		<Home file = {this.props.file}/>
       
     	</React.Fragment>
    );
  }
}

export default App;


