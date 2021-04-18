import './App.css';
import React, { useEffect, useState } from 'react'
import BooksRouter from './BooksRouter';
// import { callMyServer } from './service/book-service'
function App() {
  const [result, setResult] = useState()
  // useEffect(callBasicApi, []);

  // function callBasicApi() {
  //   callMyServer().then((res) => { setResult(res) })
  // }


  return (
    <div className="App">
      <BooksRouter />
    </div>
  );
}

export default App;
export function numAverage(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total / numbers.length;
}

export function sumNumbers(num1, num2) {
  return num1 + num2
}






