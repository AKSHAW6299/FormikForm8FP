import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Post from './components/FormikApi'
import FormikDisplayData from './components/FormikDisplayData'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Post />} />
        <Route path='/displayData' element={<FormikDisplayData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App