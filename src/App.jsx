import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'

function App() {


  return (
    <>
      <div id='mainFrameAnimation'>
        <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        </div>
      </div>
      <Navbar />
      <Header />
      <Main />
      <Contact />
      <AboutUs />
      <Footer />
    </>
  )
}

export default App
