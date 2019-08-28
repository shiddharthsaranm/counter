import React from 'react';

import Counter from "./counter";

class Counters extends React.Component{

	
	render(){
		return(
			<div>
				<button onClick={this.props.onCreate} className="btn btn-success btn-lg">Create</button>
				<button onClick={this.props.onReset} className="btn btn-warning btn-lg">Reset</button>
				
				{this.props.counters.map(counter=>
										<Counter key={counter.id} counter={counter} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} tags={["tag1","tag2","tag3"]}>
											 <h1>Counter #{counter.id}</h1>						 
										 </Counter>						
					)}
			</div>
		);
	}
}

export default Counters;