import { useState } from 'react'
import './App.css'

function App() {
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const [count,setcount] = useState<any>(0)

  return (
   <div className='text-4xl' onClick={()=>setcount(count +1)}>
    {count}
   </div>
  )
}

export default App
