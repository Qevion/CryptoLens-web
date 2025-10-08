import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonTest } from './components/ButtonTest'
import { LChart } from './components/LChart'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex justify-center items-center gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react"  alt="React logo" />
        </a>
      </div>
      <h1 className="mb-4">Vite + React</h1>
      <ButtonTest />
      <LChart />
    </div>
  )
}

export default App
