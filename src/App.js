import logo from './logo.svg';
import './App.css';
import imagen1 from './img/rey_sisebuto.png';
import imagen2 from './img/rey_leogivildo.png';
import imagen3 from './img/rey_atanagildo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Actividad 1
        </p>
      </header>
      <div className='cajas'>
          <div className='caja'>
            <img src={imagen1} className='img-caja' alt='rey1'/>
            <p>Sisebuto</p>
          </div>
          <div className='caja'>
          <img src={imagen2} className='img-caja' alt='rey2'/>
            <p>Leogivildo</p>
          </div>
          <div className='caja'>
          <img src={imagen3} className='img-caja' alt='rey3'/>
            <p>Atanagildo</p>
          </div>
        </div>
    </div>
  );
}

export default App;
