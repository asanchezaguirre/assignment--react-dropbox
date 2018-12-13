import React, {Component} from 'react';



class HomeList extends Component {
	render(){
		return(
			<div>
				<li className = "file__item">
					<div className="grid grid--expanded">
					    <div className="grid">
							<span className="file__icon">
							    <i className="fa fa-file-text-o"></i>
							</span>
							<p className="file__meta">
							    <span className="file__name">{this.props.name}</span> <br />
							    <span>{this.props.date} · {this.props.type}</span>
							</p>
						</div>
					    <button className="file__button">
					      <i className="fa fa-download"></i>
					    </button>
					</div>
				</li>
			</div>
			
		);
	}
}

export default HomeList

