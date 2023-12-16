import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text,setText]=useState('')
  const [anotherText,setAnotherText]=useState('')

  // variation 1 (every render)
  // useEffect(
  //   ()=>{
  //     console.log("UI updated")
  //   }
  // )

  // variation 2 (first render)
  // useEffect(
  //   ()=>{
  //     console.log("UI updated")
  //   },[]
  // )

  // variation 3 (first render + whenever depedency changed)
  // useEffect(
  //   ()=>{
  //     console.log("UI updated")
  //   },[text,anotherText]
  // )

  // variation 4 handle unmount of a component
  // useEffect(
  //   ()=>{
  //     console.log("listener added")
  //     return ()=>{
  //       console.log("listener removed")
  //     }
  //   },[text]
  // )

  function changeHandler(event) {
    setText(event.target.value)
    console.log(text)
  }

  function changeAnotherHandler(event) {
    setAnotherText(event.target.value)
    console.log(anotherText)
  }

  return (
    <div>
      heyy
      <br />
      <label htmlFor="">text </label>
      <input type="text" onChange={changeHandler}/>
      <br />
      <label htmlFor="">anotherText </label>
      <input type="text" onChange={changeAnotherHandler}/>
    </div>
  )
}

export default App
