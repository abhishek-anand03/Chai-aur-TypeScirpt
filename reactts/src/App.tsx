import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/counter'

function App() {

  return (
    <>
      <div>
        <h1>
          Vite + React
        </h1>
        <ChaiCard 
          name="Headphone"
          price= {5000}
        />
        <ChaiCard 
          name="iPhone"
          price= {80000}
        />
      </div>
      <div>
        <Counter />
      </div>
    </>
  )
}

export default App
