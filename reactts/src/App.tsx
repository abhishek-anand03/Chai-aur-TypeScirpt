import './App.css'
import { ChaiCard } from './components/ChaiCard'
import ChaiList from './components/ChaiList'
import { Counter } from './components/counter'
import type { Chai } from './types'

const menu: Chai[] = [
  {id: 1, name: "Masala", price: 25},
  {id: 2, name: "Ginger", price: 50},
  {id: 3, name: "Lemon", price: 60},
]

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
      <div>
        <ChaiList items={menu}/>
      </div>
    </>
  )
}

export default App
