import alt from '../control';
import JokeActions from '../actions/JokeActions';
import {bind,createStore} from 'alt-utils/lib/decorators';



@createStore(alt)
class JokeStores {
	constructor() {
		this.status='pending';
		this.data={};
		this.number=0;
	}


	@bind(JokeActions.getStory)
	handleGetStory(data){
		this.status='pending';
		this.data=null;
	}





	// handle success event
	@bind(JokeActions.successToExe)
	handleSuccessToExe(collections) {
		this.status='success';
		if(collections[this.number+1]){
			this.data=collections[this.number+1];
			this.number++;
		}else{
			this.handleFailedToExe(new Error("No more story to read!"));
		}

	}

	// handle failed event
	@bind(JokeActions.failedToExe)
	handleFailedToExe(error){
		this.status=error.message;
		this.data={};
	}
}

export default JokeStores;