import React from 'react';
import PropTypes from 'prop-types';
import './formsList.scss';

import {
  Input, Typography, Slider, Button,
} from '@material-ui/core';
import FiltersBlock from '../filtersBlock/filtersBlock';

function FormsList(props) {
  function getMaxPrice() {
    const carPrice = props.autoList.map((element) => element.props.price);
    return Math.max.apply(Math, carPrice)
  }

  function getMinPrice() {
    const carPrice = props.autoList.map((element) => element.props.price);
    return Math.min.apply(Math, carPrice)
  }

  const maxPrice = getMaxPrice();
  const minPrice = getMinPrice();

  const [value, setValue] = React.useState([minPrice, maxPrice]);

  const priceChange = (event, newValue) => {
    setValue(newValue);
  };
  function getPrice(event) {
    props.priceFilter(value)
  }

  return (
    <div>
      <form noValidate autoComplete="off">
        <Input onChange={props.brandFunc} placeholder="Search auto" inputProps={{ 'aria-label': 'Search auto' }} />
      </form>
      <h2>Filters</h2>
      <FiltersBlock autoList={props.autoList} filterFunc={props.filterFunc} />
      <div className="slider-container">
          <Typography id="range-slider">
            Price: {`${value[0]} ₽ - ${value[1]} ₽`}
          </Typography>
            <Slider
            min={minPrice}
            max={maxPrice}
            value={value}
            onChange={priceChange}
            valueLabelDisplay="off"
          />
      </div>
      <Button variant="outlined" color="secondary" onClick={getPrice}>Apply price filter </Button>
    </div>
  )
}

FormsList.propTypes = {
  brandFunc: PropTypes.func,
  filterFunc: PropTypes.func,
  autoList: PropTypes.array,
  priceFilter: PropTypes.func,
};

export default FormsList;
