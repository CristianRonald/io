import Li from './components/li'
export default function Cabecera(){
  return(
      <div className="cabecera">
        <h1>Optimizacion por simplex</h1>
        <ol>
          <Li route="/resultado">Resultados</Li>
        </ol>
      </div>
  );
}
