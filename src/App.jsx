import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main-content/Main'

const App = () => {
  return (
    <div className='app w-full h-screen flex'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App