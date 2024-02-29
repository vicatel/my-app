'use client'



import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '@/components/Navbar';
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        <NavbarComponent />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}