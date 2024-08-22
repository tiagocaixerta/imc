import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      classifyBMI(bmiValue);
    }
  };

  const classifyBMI = (bmiValue) => {
    if (bmiValue < 18.5) {
      setClassification('Abaixo do peso');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setClassification('Peso normal');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setClassification('Sobrepeso');
    } else if (bmiValue >= 30 && bmiValue <= 34.9) {
      setClassification('Obesidade grau 1');
    } else if (bmiValue >= 35 && bmiValue <= 39.9) {
      setClassification('Obesidade grau 2');
    } else if (bmiValue >= 40) {
      setClassification('Obesidade grau 3');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label>Altura (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calcular IMC</button>
      {bmi && (
        <div className="result">
          <h2>Seu IMC: {bmi}</h2>
          <p>Classificação: {classification}</p>
        </div>
      )}
    </div>
  );
}

export default App;
