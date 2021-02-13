import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { YMInitializer } from 'react-yandex-metrika';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import MainPage from "./MainPage/MainPage";

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div>
      <MainPage />
      <YMInitializer accounts={[72383356]} options={{ webvisor: true }} />
    </div>
  );
}

export default App;
