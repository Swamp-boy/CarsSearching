import React from 'react';

import './app.scss';
import carData from '../carData/carData';
import CarCard from '../carCard/carCard';
import FormsList from '../formsList/formsList';

function App() {
  const carsComponents = carData.map((el) => {
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

  const [autoList, setAutoList] = React.useState(carsComponents);
  const [filters, setFilters] = React.useState([]);
  const filtredCarComponent = [];
  const filtredCarKey = [];

  function filterAuto(event) {
    const userString = event.target.value;

    const filtredArray = carsComponents.filter((el) => {
      const str = el.props.brand.toLocaleLowerCase() + el.props.model.toLocaleLowerCase();
      if (str.includes(userString.toLocaleLowerCase())) {
        return el
      }
    })
    setAutoList(filtredArray);
  }

  function applyFilters() {
    filters.forEach((filter) => {
      carsComponents.forEach((element) => {
        const str = element.props.brand + element.props.model
          + element.props.year + element.props.fuel + element.props.bodyType;

        if (str.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
          if (!filtredCarKey.includes(element.key)) {
            filtredCarComponent.push(element);
            filtredCarKey.push(element.key)
          }
        }
      })
    })
    if (filters.length === 0) {
      setAutoList(carsComponents)
    } else {
      setAutoList(filtredCarComponent)
    }
  }

  function writeDownFilters(event) {
    if (event.target.checked && !filters.includes(event.target.name)) {
      filters.push(event.target.name);
    }
    if (!event.target.checked && filters.includes(event.target.name)) {
      const position = filters.indexOf(event.target.name)
      filters.splice(position, 1);
    }
    applyFilters();
  }

  function priceFilter(value) {
    const min = value[0];
    const max = value[1];

    const autoListWithPrice = carsComponents.map((element) => {
      if (element.props.price >= min && element.props.price < max) {
        return element
      }
    })
    const clearArray = autoListWithPrice.filter((element) => element !== undefined)

    setAutoList(clearArray);
  }

  return (
    <React.Fragment>
      <div>
        <h1> Filter and searching react app</h1>
        <div className="forms">
          <FormsList brandFunc={filterAuto}
            autoList={carsComponents}
            filterFunc={writeDownFilters}
            priceFilter={priceFilter}
          />
        </div>
      </div>
      <div className="cars-list">
        {autoList}
      </div>
    </React.Fragment>
  )
}

export default App;
