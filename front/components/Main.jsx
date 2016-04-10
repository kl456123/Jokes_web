import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Oo Test!</h1>
        <Link to='/post'>Go to the Example page...</Link>
        <Link to='/story'>Go to the joke page...</Link>
      </div>
    );
  }
}

export default Main;
