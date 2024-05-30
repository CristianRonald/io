import { useState, useEffect } from 'react';
import data from '../datos.json'
export default function Resultado(){
  const [iteracion, setIteracion] = useState(0);
  const adelantar = () => setIteracion(iteracion+1)
  const retrasar = () => setIteracion(iteracion-1)
  const d = data["iteraciones"][iteracion];
  const matriz = d["matriz"]; 
  const headers = data["v_b"]; 
  const basicas = d["Xb"]; 
  const result = d["resultado"]; 
  const results = d["results"]; 
  console.log(data["iteraciones"][iteracion]);
  return(
    <>
    <table>
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
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <table>
        <tr>
          <th>Variables basicas</th>
          <th>Resultados</th>
        </tr>
            {basicas.map((basicas, rowIndex) => (
              <tr>
                <td key={rowIndex}>{headers[basicas]}</td>
                <td key={rowIndex}>{results[rowIndex]}</td>
              </tr>
            ))}
        <tr>
          <td>Z</td>
          <td>{result}</td>
        </tr>
    </table>
    <button onClick={adelantar}>Adelantar</button>
    <button onClick={retrasar}>Retrasar</button>
    </>
  );
}
