import React from "react";
import "./card.module.css"

class Card extends React.Component {
  render() {
    return (
      <div className="col-6 col-12 d-flex flex-row">
      
          <div className="card col-12">
            <img
              className="img"
              width="200px"
              src={`https://image.tmdb.org/t/p/w300/${this.props.image}`}
              alt=""
            />

            <div className="card-body">
              <h5 className="card-title"> {this.props.title} </h5>
              <p className="card-text"> Year: {this.props.year} </p>
              <p className="card-text"> Description: {this.props.description} </p>
            </div>
          </div>
 
      </div>
      
    );
  }
}

export default Card;
