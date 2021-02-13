import './App.css';
// import logo from './logo.svg';
import {YMInitializer} from 'react-yandex-metrika';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Дружинин<span class="red-letter">ъ</span></h1>
        {/* <small></small> */}
        <YMInitializer accounts={[72383356]} options={{webvisor: true}}/>
      </header>
    </div>
  );
}

export default App;
