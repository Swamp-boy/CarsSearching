import React from 'react';
import PropTypes, { func } from 'prop-types';

import { Checkbox } from '@material-ui/core';
import './filtersBlock.scss';

function FiltersBlock(props) {
  const modelsArr = [];
  const brandArr = [];
  const yearArr = [];
  const fuelArr = [];
  const bodyTypeArr = [];
  let keyCounter = 0;

  props.autoList.forEach((el) => {
    if (!modelsArr.includes(el.props.model)) {
      modelsArr.push(el.props.model)
    }
    if (!brandArr.includes(el.props.brand)) {
      brandArr.push(el.props.brand)
    }
    if (!yearArr.includes(el.props.year)) {
      yearArr.push(el.props.year)
    }
    if (!fuelArr.includes(el.props.fuel)) {
      fuelArr.push(el.props.fuel)
    }
    if (!bodyTypeArr.includes(el.props.bodyType)) {
      bodyTypeArr.push(el.props.bodyType)
    }
    modelsArr.sort();
    brandArr.sort();
    yearArr.sort();
    fuelArr.sort();
    bodyTypeArr.sort();
  })

  const modelCheckbox = modelsArr.map((el) => {
    const checkbox = <div className="checkboxes-container">
      <Checkbox key={`chekbox${keyCounter}`} name={el} onChange={props.filterFunc}/>
      <label>{el}</label>
    </div>
    keyCounter++;
    return checkbox;
  })

  const brandCheckbox = brandArr.map((el) => {
    const checkbox = <div className="checkboxes-container">
        <Checkbox key={`chekbox${keyCounter}`} name={el} onChange={props.filterFunc}/>
        <label>{el}</label>
    </div>
    keyCounter++;
    return checkbox;
  })

  const yearCheckbox = yearArr.map((el) => {
    const checkbox = <div className="checkboxes-container">
        <Checkbox key={`chekbox${keyCounter}`} name={el.toString()} onChange={props.filterFunc}/>
        <label>{el}</label>
    </div>
    keyCounter++;
    return checkbox;
  })

  const fuelCheckbox = fuelArr.map((el) => {
    const checkbox = <div className="checkboxes-container">
        <Checkbox key={`chekbox${keyCounter}`} name={el} onChange={props.filterFunc}/>
        <label>{el}</label>
    </div>
    keyCounter++;
    return checkbox;
  })

  const bodyTypeCheckbox = bodyTypeArr.map((el) => {
    const checkbox = <div className="checkboxes-container">
        <Checkbox key={`chekbox${keyCounter}`} name={el} onChange={props.filterFunc}/>
        <label>{el}</label>
    </div>
    keyCounter++;
    return checkbox;
  })

  return (
    <div>
      <p className="filter-title">Model:</p>
      <form className="checkbox-line">{modelCheckbox}</form>

      <p className="filter-title">Brand:</p>
      <form className="checkbox-line">{brandCheckbox}</form>

      <p className="filter-title">Year:</p>
      <form className="checkbox-line">{yearCheckbox}</form>

      <p className="filter-title">Fuel type:</p>
      <form className="checkbox-line">{fuelCheckbox}</form>

      <p className="filter-title">Body type:</p>
      <form className="checkbox-line">{bodyTypeCheckbox}</form>
    </div>
  )
}

export default FiltersBlock;

FiltersBlock.propTypes = {
  filterFunc: PropTypes.func,
  autoList: PropTypes.array,
  brand: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  fuel: PropTypes.string,
  bodyType: PropTypes.string,
  price: PropTypes.number,
};
