import React from 'react';

import App from "../App"

class navbar extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand mb-0 h1">Navbar</span>
			<span className="navbar-link mb-0 h1">{this.props.length}</span>
			</nav>
		)
	}
}

export default navbar;