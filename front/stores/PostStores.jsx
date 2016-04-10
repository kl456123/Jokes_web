import alt from '../control';
import JokeActions from '../actions/JokeActions';
import {bind,createStore} from 'alt-utils/lib/decorators';



@createStore(alt)
class PostStores {
	constructor() {
		this.result='init';
		this.data='';
	}

	@bind(JokeActions.postData)
	handlePostData(){
		this.result='pending';
	}
	 
	// handle success event
	@bind(JokeActions.successToExe)
	handleSuccessToExe(data) {
		this.result='success';
		this.data=data;
	}

	// handle failed event 
	@bind(JokeActions.failedToExe)
	handleFailedToExe(error){
		this.reslut=error.message;
	}
}

export default PostStores;