import './App.css'
import { Button } from './Component/Common/button'
import { Navbar } from './Component/Common/Share/Navnar'
import { Footer } from './Component/Common/Share/Footer'
import { MobileMenue } from './Component/Common/Share/MobileMenue'
import { SectionTitle } from './Component/Section/SectionTitle'
import './index.css'

function App() {
  
  return (
    <main className='bg-sky-500'>
      <Navbar/>
      <MobileMenue/>
      <Footer/>
        

       
    </main>
  )
}

export default App
