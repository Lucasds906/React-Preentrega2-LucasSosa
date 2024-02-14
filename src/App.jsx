// import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar' 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos al Emporio Virtual, donde podrán encontrar lo que sea que estén buscando'}/>
      </div>
    </>
  )
}

export default App
