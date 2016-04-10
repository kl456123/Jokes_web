import alt from '../control';
import {createActions} from 'alt-utils/lib/decorators';
import apis from 'apis/apis';


@createActions(alt)
class JokeActions {


	// every function must return a object.
	getStory(url) {
		let result=apis.get(url)
		.then((data)=>{
			if(data===undefined)throw Error("The data is lost!");
			var temp = JSON.parse(data);
			this.successToExe(temp);
		})
		.catch((error)=>{
			this.failedToExe(error);
		});
		return result;
	}

	postData(url,postData) {
		let result=apis.post(url,postData)
		.then((data)=>{
			if(data==undefined)throw Error("The data is lost!");
			this.successToExe(data);
		}, (error)=>{
			this.failedToExe(error);
		});
		return result;
	}

	//success to execlute
	successToExe(data){
		return data;
	}

	// failed to execlute
	failedToExe(error){
		return error;
	}
}

export default JokeActions;