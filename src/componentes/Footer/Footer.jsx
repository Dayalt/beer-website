// Link del React Scroll
import { Link, animateScroll as scroll } from "react-scroll";

import './Footer.css'

function Footer(){

    return(
        <div className="contenedor">
            <div className="barra">
                <Link 
                    activeClass="active"
                    to="coverImage" 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav_enlace"  
                >
                <h1 className="header-h1">LOGO</h1>
                </Link>
            

                <nav>
                    <Link 
                        activeClass="active"
                        to="aboutUs" 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav_enlace"  
                    >
                    Nosotros
                    </Link>
                    <Link 
                        activeClass="active"
                        to="productos" 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav_enlace"
                    >
                        Productos
                    </Link>
                    <Link 
                        activeClass="active"
                        to="testimonios" 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav_enlace"  
                    >
                    Testimonios
                    </Link>
                    <Link 
                        activeClass="active"
                        to="contact" 
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav_enlace"  
                    >
                    Contacto
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Footer;