import React from 'react';
import JokeStores from '../stores/JokeStores';
import connectToStores from 'alt-utils/lib/connectToStores';
import JokeActions from '../actions/JokeActions';
import {Link} from 'react-router';
import {Component}from 'react';


class JokeComponent extends Component {

    static getStores() {
        return [JokeStores];
    }

    static getPropsFromStores() {
        return JokeStores.getState();
    }

    constructor(props) {
        super(props);
    }

    handleClick(){
        let url='/getStory';
        JokeActions.getStory(url);
    }

    render() {
        let article = this.props.data;
        return (
        	<div>
            status:<h2>{this.props.status}</h2>
            number:<h2>{this.props.number}</h2>
            jokeStory:<h1>{article.title}</h1>
                        <p>{article.content}</p>
                        <button onClick={this.handleClick}>getJokeStory</button>
                        <Link to='/post'>post some data</Link>
            </div>
        	);
    }

}



export default connectToStores(JokeComponent);
