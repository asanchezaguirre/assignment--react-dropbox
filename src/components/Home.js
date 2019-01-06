import React, { Component} from 'react';
import moment from 'moment'



class Home extends Component{
	constructor(props) {
    super(props);

    this.state = {
      data : this.props.file,
      functions : [],
      total: 0
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

  //Funcionalidad del botón //Agregar los archivos seleccionados

  filterBySelect(select){
    var nameAdd = this.props.file.filter((type) => {
      return type.id === select
    })[0]
    //Método every devuelve un boolean 
    var notDuplicate = this.state.functions.every((functions)=>{
      return functions !== nameAdd;
    });

    if(notDuplicate){
    this.setState({
      //Agregar varios elementos, de lo contrario sòlo se ponìa uno a la vez
      functions: [...this.state.functions, nameAdd],
      //funciòn de suma
      total: this.state.total + parseInt(nameAdd.size)
    
    });
  }

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
								    <span>Added: {moment(datos.added_at, "YY"). fromNow()} · {datos.category}</span>
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
          <h3>TOTAL:  {this.state.total} KB</h3>
       			<div>
            		{ this.state.functions.map(type => {
              			return (
              			<div>	
	                		<div>{ type.name }</div>
	                		<div>{ type.size }</div>
	                	</div>

              		);
           		 }) }
          		</div>
          

			</div>
     	</div>
    );
  }
}

export default Home;
