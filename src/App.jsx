import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Destinations from "./Components/Destinations";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";



function App() {
  

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <Destinations/>
        <Testimonial/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
