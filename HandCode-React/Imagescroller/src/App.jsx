import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageScroller from './ImageScroller'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <ImageScroller/>
    
    </>
  )
}

export default App
