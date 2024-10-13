import './App.css'
import { Button } from './Component/Common/button'
import { SectionTitle } from './Component/Section/SectionTitle'
import './index.css'

function App() {
  
  return (
    <>
      <div className='overflow-x-hidden'>
        <h1>TAJBIRUL ISLA,</h1>
       <Button>primary Button</Button>
       <Button className="bg-white text-black">secondary Button</Button>
       <SectionTitle></SectionTitle>
      </div>
        

       
    </>
  )
}

export default App
