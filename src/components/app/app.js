import React from 'react';

import styles from './app.module.scss';
import CarsList from '../carsList/carsList';

function App() {
  return (
    <main className={styles.app}>

      <CarsList/>
    </main>
  );
}

export default App;
