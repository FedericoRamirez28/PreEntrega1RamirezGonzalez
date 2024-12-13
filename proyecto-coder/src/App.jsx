import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <section>
       <div>
      <NavBar />
    </div>
      <div>
      <ItemListContainer greeting="StreetStyle" />
      </div>
      </section>
    </>
  )
}

export default App
