import React, { Component } from 'react';

import './app.scss';
import carData from '../carData/carData';
import CarCard from '../carCard/carCard';
import FormsList from '../formsList/formsList';
import SearchAutoContext from '../searchAutoContext';

/*
class App extends Component {
  constructor() {
    super();
    this.cardsArray = carData.map((el) => {
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
  }

  createCards() {
    this.cardsArray = carData.map((el) => {
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

    this.cardsState = this.cardsArray;
  }

  searchAuto(event) {
    const userString = event.target.value;
    const filtredArray = carData.filter((el) => {
      const str = el.brand.toLocaleLowerCase() + el.model.toLocaleLowerCase();
      if (str.includes(userString.toLocaleLowerCase())) {
        return el
      }
    })
    this.cardsState = filtredArray;
  }

  render() {
    this.createCards();
    return (

      <React.Fragment>
        <div>
          <h1> Filter and searching react app</h1>
          <div className="forms">
            <FormsList brandFunc={this.searchAuto}/>
          </div>
        </div>
        <div className="cars-list">
          {this.cardsState}
        </div>
        </React.Fragment>

    )
  }
}
*/
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

  return (
    <React.Fragment>
      <div>
        <h1> Filter and searching react app</h1>
        <div className="forms">
          <FormsList brandFunc={filterAuto}/>
        </div>
      </div>
      <div className="cars-list">
        {autoList}
      </div>
      </React.Fragment>
  )
}

export default App;
