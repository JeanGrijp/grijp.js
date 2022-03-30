import { Fragment, useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  let num = 0

  useEffect(() => {
    console.log('entrou no useEffect')
  }, [count, num])

  return (
    <Fragment>
      <h1>State: {count}</h1>
      <h1>Const: {num}</h1>
      <button onClick={() => setCount(count + 1)} >incrementar</button>
      <button onClick={() => setCount(count - 1)} >decrementar</button>
      <br />
      <br />
      <br />
      <button onClick={() => {
        num = num + 1;
        console.log(num)
      }} >incrementar const</button>
      <button onClick={() => {
        num = num - 1;
        console.log(num)
      }} >decrementar const</button>
    </Fragment>
  );
}

export default App;
