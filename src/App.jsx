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
         <div className='cover'>
         <img className='imagen' src="src/assets/beer-drink.jpg" alt="Foto bebida" />
          </div>
      </section>

      <section id='aboutUs' > {/* Section About Us */}
          <h2 className='aboutUs-titulo'>Acerca de Nosotros</h2>
          <div className="aboutUs-contenedor">
            <div className="aboutUs-image">
              <img src="/src/assets/logo.png" alt="" />
            </div>
            <div className="aboutUs-text">
              <div className="text">
                <p><strong>Beer-Website</strong>, un destino digital creado con pasión por la cerveza y la cultura que la rodea. En nuestra plataforma.</p>
                <br />
                <p>En <strong>Beer-Website</strong>, nos esforzamos por ir más allá de la presentación de productos. Queremos ofrecer una experiencia inmersiva, donde cada visita sea un viaje sensorial a través de las diferentes notas, aromas y estilos de cerveza. Además, fomentamos la conexión entre la comunidad cervecera, compartiendo historias, testimonios y conocimientos.</p>
                 <div className="aboutUs-overlay"></div>
                 <div className="aboutUs-imagen"></div>

              </div>
             
            </div>
          </div>
      </section>
     
      <section id="productos" className="producto-container"> {/* Section Productos */}
        <div className="contenedor">
           <BeerFlex />
        </div>  

      </section>


      <section
        id="testimonios"
          style={{
            backgroundImage: 'url(./src/img/cubos-de-hielo-grandes-y-transparentes.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
          }}
            >
        <div className='contenedor'>
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
