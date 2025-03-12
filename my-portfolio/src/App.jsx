import {BrowserRouter} from 'react-router-dom';
import {About,Contact,Experience,Hero,Navbar, StarsCanvas, Tech, Works} from './components';
const App = () => {
  return (
   <BrowserRouter>
      <div className="relative z-0 bg-primary flex flex-col items-center w-full ">
        <div className="relative bg-hero-pattern bg-cover bg-no-repeat w-full flex flex-col items-center">
          <div className="w-full max-w-7xl translate-y-10">
            <Navbar />
            <Hero />
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-5xl space-y-10 px-5">
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>
        
        <div className="relative translate-y-40 z-0 flex flex-col items-center w-full max-w-5xl ">
        <Contact/>
        <StarsCanvas/>
      </div>
      
   </div>

   </BrowserRouter>
  )
}

export default App
