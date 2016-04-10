import React from 'react';
import JokeActions from '../actions/JokeActions';
import PostStores from  '../stores/PostStores';
import connectToStores from 'alt-utils/lib/connectToStores';
import {Component} from 'react';

@connectToStores
class PostComponent extends Component{

	static getStores(){
		return [PostStores];
	}

	static getPropsFromStores(){
		return PostStores.getState();
	}

	constructor(props){
		super(props);
		this.state={
			data:'',
		};
		this.postData=this.postData.bind(this);
		this._onChange=this._onChange.bind(this);
	}

	postData(){
		let url='/postData';
		JokeActions.postData(url,this.state.data);
	}
	
	_onChange(event){
		this.setState({data:event.target.value});
	}

	render(){
		return (
			<div>
			<form onSubmit={this.postData}>
			<textarea value={this.state.data} onChange={this._onChange}></textarea>
			<button>Submit</button>
			</form>
			test result:<p>{this.props.result}</p>
			return data:<p>{this.props.data}</p>
			</div>
			);
	}
}

export default PostComponent;