import { useState } from 'react';
import data from './datos.json'
import avanzar from './advance.svg'
import retroceder from './backward.svg'
import './App.css'
export default function App() {
  const [iteracion, setIteracion] = useState(0);
  const adelantar = () => setIteracion(iteracion + 1)
  const retrasar = () => setIteracion(iteracion - 1)
  const d = data["iteraciones"][iteracion];
  const matriz = d["matriz"];
  const headers = data["v_b"];
  const basicas = d["Xb"];
  const result = d["resultado"];
  const results = d["results"];
  return (
    <>
      <h1>Programacion lineal</h1>
      <div className="contenedor">
        <p>Iteracion: {iteracion + 1}</p>
        <table className="tabla">
          <thead>
            <tr>
              {headers.map((header, rowIndex) => (
                <th key={rowIndex}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matriz.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell.toFixed(2)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <table className="tabla small">
          <tr>
            <th>Variables basicas</th>
            <th>Resultados</th>
          </tr>
          {basicas.map((basicas, rowIndex) => (
            <tr>
              <td key={rowIndex}>{headers[basicas]}</td>
              <td key={rowIndex}>{Number(results[rowIndex]).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td>Z</td>
            <td>{Number(result).toFixed(2)}</td>
          </tr>
        </table>
      </div>
      <div className="contenedor-boton" style={{ display: 'flex' }}>
        <button className={`boton adelantar`} style={(iteracion) ? { display: 'block' } : { display: 'none' }} onClick={retrasar}><img src={retroceder} /></button>
        <button className={`boton adelantar`} style={(data["num_iter"] > iteracion + 1) ? { display: 'block' } : { display: 'none' }} onClick={adelantar}><img src={avanzar} /></button>
      </div>
    </>
  );
}
