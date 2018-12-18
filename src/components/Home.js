import React, { Component} from 'react';



class Home extends Component{
	constructor(props) {
    super(props);

    this.state = {
      data : this.props.file,
      functions : []
      
    };
  }
  //Funcionalidad Search input
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

  //Funcionalidad del botón

  filterBySelect(select){
    var nameAdd = this.props.file.filter((type) => {
      return type.id === select
    });
    this.setState({
      functions: nameAdd
    });

  }
  //Acaba funcionalidad del botón

  
  render() {
    return (
       <div className = "contenedor">
       		<div className= "fileList">
       		<input onChange={this.searchByName} type ="search" placeholder= "Search"/>
       		<ul>
       			{this.state.data.map((datos) => {
             	return (
					<li className = "file__item">
						<div className="grid grid--expanded">
						    <div className="grid">
								<span className="file__icon">
								    <i className="fa fa-file-text-o"></i>
								</span>
								<p className="file__meta">
								    <span className="file__name">{datos.name}</span> <br />
								    <span>{datos.added_at} · {datos.category}</span>
								</p>
							</div>
						    <button onClick = {() => this.filterBySelect(datos.id)} className="file__button">
						      <i className="fa fa-download"></i>
						    </button>
						</div>
					</li>
				);
              })
       		}
       		</ul>
       		</div>
       		<div className= "add">
       		<h2>COMPRESS</h2>
       			<ul>
            		{ this.state.functions.map(type => {
              			return (
                		<li>{ type.name }</li>
              		);
           		 }) }
          		</ul>

			</div>
     	</div>
    );
  }
}

export default Home;
