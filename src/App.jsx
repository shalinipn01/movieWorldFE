import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AllRoutes } from './routes/AllRoutes'
import { HeaderComponent, FooterComponent} from './components'

function App() {
  const [count, setCount] = useState(0)

  //import.meta.env.VITE
  return (
    <>
    <HeaderComponent />
      <AllRoutes />
      <FooterComponent />
    </>
  )
}

export default App
