import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {


  return (
    <div className="App">
      <h1 className='header blue centered'><span className='yellow'> Cat</span>ify</h1>
      <Card/>
    </div>
  )
}

export default App
