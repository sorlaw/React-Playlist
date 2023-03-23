import { useState } from 'react'
import Car from './components/Car'


function App() {

  const [carName, setCarName] = useState("Alphard");
  const [info, setInfo] = useState("none");

  return (
    <div>
      <input type="text" name="masukkan brand mobil" onChange={e => setCarName(e.target.value)} />
      {
        carName == "toyota" ? <h2>ini mobil terbaik</h2> : <h3>ini mobil bagus</h3>
      }
      <input type="text" name="masukkan info mobil" onChange={e => setInfo(e.target.value)} />
      <Car brand={carName} info={info} />
    </div>
  )
}

export default App
