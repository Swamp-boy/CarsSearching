import React from 'react';

import styles from './carsList.module.scss';
import CarCard from '../carCard/carCard';
import carData from '../carData/carData';

function CarsList() {
  const cardsArray = carData.map((el) => {
    const card = <CarCard
      key={carData.indexOf(el)}
      brand={el.brand}
      model={el.model}
      year={el.year}
      fuel={el.fuel}
      bodyType={el.bodyType}
      price={el.price}
      />
    return card;
  })

  return (
      <div className={styles.carList}>
          {cardsArray}
      </div>

  );
}

export default CarsList;
