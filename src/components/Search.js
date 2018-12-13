import React, { Component} from 'react';
import HomePrev from "./HomePrev";



class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : this.props.file
    };
  }

  searchByName = (e) => {
    var query = e.target.value.toLowerCase();

    var coincidences = this.props.file.filter(function(shot) {
      var nameInLowerCase = shot.name.toLowerCase();

      return nameInLowerCase.includes(query);
    });

    this.setState({
      data: coincidences
    });
  }


  render() {
    return (
      <React.Fragment>
        {/* START Communicating state to children with props */}
        <input onChange={ this.searchByName } type="search" placeholder="Search" />
        <HomePrev newFile={this.state.data}/>
        {/* END Communicating state to children with props */}

      </React.Fragment>
    );
  }
}

export default Search;