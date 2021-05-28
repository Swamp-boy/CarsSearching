import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './carCard.scss';

class CarCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="card-container">
        <div className="card-container__head">
          <h3 className="card-container__head-brand"> { this.props.brand } </h3>
          <p className="card-container__head-model">  { this.props.model } </p>
        </div>
        <ul className="card-container__characteristics">
          <li>Year: {this.props.year}</li>
          <li>Fuel: {this.props.fuel}</li>
          <li>Body type: {this.props.bodyType}</li>
          <li>Price {this.props.price} &#8381;</li>
        </ul>
      </div>
    )
  }
}

CarCard.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  fuel: PropTypes.string,
  bodyType: PropTypes.string,
  price: PropTypes.number,
};

export default CarCard;
