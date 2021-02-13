import './App.css';
import {YMInitializer} from 'react-yandex-metrika';
import ym from 'react-yandex-metrika';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Дружининъ</h1>
        <p>Исследования и разработка</p>
        <YMInitializer accounts={[72383356]} options={{webvisor: true}}/>
      </header>
    </div>
  );
}

export default App;
