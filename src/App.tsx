import './App.css'
import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroImage } from './components/HeroImage'
import { LabelLess } from './components/LabelLess'
import { Products } from './components/Products'
import { Promotion } from './components/Promotion'
import { Reasons } from './components/Reasons'

function App() {

  return (
    <>
      <Header />
      <HeroImage />
      <Promotion />
      <Products />
      <Reasons />
      <LabelLess />
      <BackToTop />
      <Footer />
    </>
  )
}

export default App
