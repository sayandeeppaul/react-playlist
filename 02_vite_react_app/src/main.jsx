import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const reactElement = {
//   type:'a',
//   props:{
//       href :'https://google.com',
//       target:'_blank',
//       class:'link',
//       id:'google',
//       title:'demo'
//   },
//   children : "click me to open google"
// }

// let anotherElement = (
//   <a  href='https://google.com' target='_blank'>google</a>
// )



function MyApp() {

  let a = 2
  let b = 4
  let c = a + b

  return (
    <div>
      <h1>Sayandeep {a} + {b} = {c}</h1> 
    </div>
  )
}
const textInsideTag = "click me to open google"

const reactElement = React.createElement(
  'a',
  {
    href :'https://google.com',
      target:'_blank',
  },
  textInsideTag
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyApp />
  // reactElement
)
