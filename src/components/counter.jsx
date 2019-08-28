import React from 'react';

class Counter extends React.Component{
	// state={
	// 	count:this.props.counter.value,
	// 	tags:["tag1","tag2","tag3"]
	// };

	styles={
		fontSize:50
	}

	renderTags(){
		if(this.props.tags.length===0){
			return <h1>There are no elements!</h1>;
		}
		else{
			return <ul>{this.props.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
		}
	}

	// handeIncrement=product=>{
	// 	this.setState({count:this.state.count+1});
	// }
	
	render(){
		return(	
			<React.Fragment>
			
			{this.props.children}
			
			<span style={this.styles} className={this.getBadgeClasses()}>{this.countFinder()}</span>	
			<button onClick={()=>this.props.onIncrement(this.props.counter.id)} id="but" className="btn btn-primary btn-lg">Increment</button>
			<button onClick={()=>this.props.onDelete(this.props.counter.id)} id="del" className="btn btn-danger btn-lg">Delete</button>
			
			{this.renderTags()}
				
			</React.Fragment>
		);		
	}
	
	getBadgeClasses(){
		let classes="badge m-2 badge-";
		if(this.props.counter.value===0){
			return classes+="warning"
		}
		else{
			if(this.props.counter.value%5===0){
				return classes+="danger";
			}
			return classes+="primary";
		}
	}
	
	countFinder(){
		if (this.props.counter.value===0){
			return "Zero";
		}
		else{
			return this.props.counter.value;
		}
	}
}


export default Counter;