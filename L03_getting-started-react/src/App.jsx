import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Anthony Daniel Bautista</h1>
      <h2>BSIS-3</h2>
      <hr />
      <h3>I'm Human</h3>
      <hr />

      <h2>Reflection</h2>

      <p>
        to what i have learn on this course ,some of the fundamentals of application development and how to build a friendly  application. i also gained experience using git, which help me manage my code, track changes, and also collaborate more effectively.
        learning how react works in basics, help me create reusable components and build interactive user. Finally, Node.js, this help me better understanding of how  back/frontend technologies work together in modern web applications.
      </p>
    </div>
  )
}

export default App
