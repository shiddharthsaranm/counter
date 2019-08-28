import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Counters from "./components/counters"
import NavBar from "./components/navbar"

class App extends React.Component {
	state={
		counters:[
			{id:1,value:5},
			{id:2,value:0},
			{id:3,value:0},
			{id:4,value:0}
		]
	}
	
	handleIncrement=counterId=>{
		const counters=this.state.counters.map(function(x){
			if(x.id===counterId){
				x.value+=1;
				return x;
			}
			else{
				return x;
			}
		});
		this.setState({counters});
	}

	handleDelete=counterId=>{
		const counters=this.state.counters.filter(counte=>counte.id!==counterId);
		this.setState({counters:counters});
	}

	handleReset=()=>{
		const counters=this.state.counters.map(counte=>
					{
						counte.value=0
						return counte
					});
		
		this.setState({counters});
	}
	
	handleCreate=()=>{
		
		this.state.counters.push({id:this.state.counters[this.state.counters.length-1].id+1,value:0});
		const counters=this.state.counters.map(x=>x);
		this.setState(counters);
	}

	
	render(){
		return (
			<React.Fragment>
				<NavBar 
					length={this.state.counters.filter(counte=>counte.value>0).length}
					/>
				<Counters 
					counters={this.state.counters}
					onIncrement={this.handleIncrement} 
					onDelete={this.handleDelete}
					onReset={this.handleReset}
					onCreate={this.handleCreate}
					/>
				<main className="container"></main>
			</React.Fragment>
	  );
}
}

export default App;
