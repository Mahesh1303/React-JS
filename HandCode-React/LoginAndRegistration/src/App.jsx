import { useState } from 'react'
import './App.css'
import LoginRegistration from './loginRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <LoginRegistration/>

    </div>
  )
}

export default App
