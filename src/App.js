import './App.css';
import Led from './components/led';
import Logo from "./img/logo.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt='Logo SENAI' className='logo'/> <br />
        <h2>Simulador de Defeitos em Nuvem</h2> <br />
        <div className='leds'>
          <Led name="D1" />
          <Led name="D2" />
          <Led name="D3" />
          <Led name="D4" />
          <Led name="D5" />
          <Led name="D6" />
        </div>
        <br />
        <h5>
        SENAI "Almirante Tamandaré"
      </h5>
      </header>
      
    </div>
  );
}

export default App;
