import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)
 
  return ( 
    <> 
      <div>
        
         <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> 
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>  */} 
      </div>  
      <h1>Gestión de Mantenimiento</h1>
      <div className="card">
        <button>
          <a href="https://forms.office.com/r/gNuCnP0ujN">
            Completar Formulario
          </a>
        </button>

      </div>

      <Footer/>
      
    </>
  )
}

export default App
