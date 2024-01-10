import { useState } from 'react'
import './App.css'
import ContentMain from './components/ContentMain/ContentMain'
import Sidebar from './components/Sidebar/Sidebar'
function App() {

  return (
    <div className='main'>
    <Sidebar/>
    <ContentMain/>
    </div>
  )
}

export default App