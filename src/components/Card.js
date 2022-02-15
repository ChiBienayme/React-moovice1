import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div>
          
          <img src="https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png" width="200px" alt="" />
           <p> Title: {this.props.title} </p>
           <p> Year: {this.props.year} </p>
           <p> Description: {this.props.description} </p>
      </div>
    )
  }
}

export default Card