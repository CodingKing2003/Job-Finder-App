import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-[#f7fdfd]'>
      <Navbar />



      <Footer />

   </main>
  )
}

export default App
