import {useState} from "react";
import './App.css'

function App() {

  let [value,setValue] = useState(0)

  // let value = 15; => already defined in hookState

  let addValue = (()=>{
    if(value>=20) return;
    setValue(++value)
    // setValue(value+1)
  })

  let removeValue = (()=>{
    if(value<=0) return;
    setValue(--value)
  })

  return (
    <>
      <div className='container'>
        <span className="mainHeading">Custom Counter</span>
        <h2>Counter Value : {value}</h2>

        <div className="btn">
        <button onClick={addValue} type="button">Increase</button>
        <button onClick={removeValue} type="button">Decrease</button>
        </div>

        <div>
          <h2>Condition : </h2>
          <h3>Max Value Count : 20</h3>
          <h3>Min Value Count : 0</h3>
        </div>
      </div>
    </>
  )
}

export default App
