import React from 'react';
import PropTypes from 'prop-types';

import styles from './carCard.module.scss';

export default function CarCard(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.topBlock}>
        <h3> { props.brand } </h3>
        <p>  { props.model } </p>
      </div>
      <ul className={styles.characteristics}>
        <li>Year: {props.year}</li>
        <li>Fuel: {props.fuel}</li>
        <li>Body type: {props.bodyType}</li>
        <li>Price {props.price} &#8381;</li>
      </ul>
    </div>
  )
}

CarCard.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  fuel: PropTypes.string,
  bodyType: PropTypes.string,
  price: PropTypes.number,
};
