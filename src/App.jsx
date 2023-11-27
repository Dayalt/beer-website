// Estilos
import React from 'react';
import './App.css'
import './componentes/Footer/Footer.css'

//Componentes
import Header from './componentes/Header/Header'
import Testimonials from './componentes/Testimonials';
import BeerFlex from './componentes/BeerFlex/BeerFlex';
import Contact from './componentes/ContactForm/Contact';
import Footer from './componentes/Footer/Footer';
import beerImage from './assets/beer-drink.jpg';


function App() {
  return (
    <div>
      <Header />
      <section id='coverImage' className="cover-image-section">  {/* Portada Imagen principal */}
         <div>
         <img className='imagen' src="src/assets/beer-drink.jpg" alt="Foto bebida" />
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


      <section id="testimonios" style={{backgroundColor: 'black'}}> {/* Section Testimonio */}
        <div className='contenedor'>
        <h1>TESTIMONIOS</h1>
          <Testimonials />
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
