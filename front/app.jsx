import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from 'react-router';


import JokeComponent from './components/JokeComponent';
import PostComponent from './components/PostComponent';
import Main from './components/Main';

ReactDOM.render(
    (<Router>
    	<Route path="/story" component={JokeComponent} />
    	<Route path="/post" component={PostComponent} />
    	<Route path="/" component={Main} />
    </Router>)
    ,
    document.getElementById('COMMENT')
);
