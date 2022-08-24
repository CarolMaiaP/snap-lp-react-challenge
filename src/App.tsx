import './App.css'
import { Header } from './components/Header'
import { PrincipalContainer } from './components/PrincipalContainer'
import { PrincipalImage } from './components/PrincipalImage'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <PrincipalContainer/>
        <PrincipalImage/>
      </main>
    </div>
  )
}

export default App
