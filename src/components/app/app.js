import React from 'react';

import styles from './app.module.scss';
import CarsList from '../carsList/carsList';

function App() {
  return (
    <React.Fragment>
      <div>
        <h1> Filter and searching react app</h1>
      </div>
      <main className={styles.app}>

        <CarsList/>
      </main>
    </React.Fragment>

  );
}

export default App;
