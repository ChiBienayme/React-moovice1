import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  render() {
    return (
      <div>
          <h1>Home</h1>
          <h3 className='text-danger text-center'> Welcome to Moovice !</h3>
          <p className='text-danger text-center'> Enjoy your moment </p>
      </div>
    )
  }
}

export default Home