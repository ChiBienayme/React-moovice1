import React from "react";
import "./card.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {
  render() {
    return (
      <div className="row" >
        <div className="col-sm-12 ">

          <div className="card movie-card">
            <div className="card-img-top">
              <img
                className="img"
                width="200px"
                src={`https://image.tmdb.org/t/p/w300/${this.props.image}`}
                alt=""
              />

              <div className="card-body">
                <h5 className="card-title  mb-2"> {this.props.title} </h5>
                <p className="card-text" style={{fontSize: '14px'}}> Year: {this.props.year} </p>
                <p className="text-justify" style={{fontSize: '14px'}}> Description: {this.props.description} </p>
              </div>

            </div>
          </div>

        </div>
      </div>
      
    );
  }
}

export default Card;
