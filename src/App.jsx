// Estilos
import './App.css'
import './componentes/Footer/Footer.css'

//Componentes
import Header from './componentes/Header/Header'
import Testimonials from './componentes/Testimonials';
import BeerFlex from './componentes/BeerFlex/BeerFlex';
import Contact from './componentes/ContactForm/Contact';
import Footer from './componentes/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <section id='coverImage'>  {/* Portada Imagen principal */}
         <div>
          <p>Va la imagen</p>
          </div>
      </section>

      <section id='aboutUs'  style={{backgroundColor: 'aquamarine'}} > {/* Section About Us */}
        <div className='contenedor'>
          <h1>Nostroso</h1>
        </div>
      </section>
     
      <section id="productos"> {/* Section Productos */}
        <BeerFlex />

      </section>


      <section id="testimonios" style={{backgroundColor: 'LightSteelBlue'}}> {/* Section Testimonio */}
        <div className='contenedor'>
          <Testimonials />
            <p> van los componentes del testimonio</p>
        </div>
      </section>


      <section id='contact' style={{backgroundColor: 'SandyBrown'}} >  {/* Section Contact */}
      <div className="contenedor-contacto" >
          <Contact />
        </div>

      </section>
      <footer className='footer'>
        <Footer  />
      </footer>
    </div>
  )
}

export default App
