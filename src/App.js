import Saludo from './Saludo';

function App() {
  return (
    <div>
      <h1>¡Hola React!</h1>
      <p>Este es mi primer componente.</p>
      <Saludo nombre="Santiago" />
      <Saludo nombre="Laura" />
    </div>
  );
}

export default App;

