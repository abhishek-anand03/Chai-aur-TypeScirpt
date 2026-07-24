import './App.css'
import { ChaiCard } from './components/ChaiCard'

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
    </>
  )
}

export default App
