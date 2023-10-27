import { useEffect } from "react"
import { renderAux } from "../helpers/renderAux"
import { sizeAuxiliar } from "../helpers/sizeAuxiliar";

export const HeaderView = () => {  

    const menu_menu = (e) => {
        e.preventDefault();
        renderAux(); 
    }
    
    useEffect(() => {
        window.addEventListener('resize', sizeAuxiliar);
    }, []);

    return (
        <>
            <a className="auxiliar" href="#header">
                <picture>
                    <source srcSet="/img/al-logo-bg.avif" type="image/avif"/>
                    <source srcSet="/img/al-logo-bg.webp" type="image/webp"/>
                    <img loading="lazy" width="40px" src="/img/al-logo-bg.png" alt="Logo AL"/>
                </picture>
            </a>

            <header className="header pb-5" id="header">
            <div className="container-navbar container">
                <div className="mt-3" data-aos="zoom-in">
                    <a href="/">
                        <picture>
                            <source srcSet="/img/al-logo-bg.avif" type="image/avif"/>
                            <source srcSet="/img/al-logo-bg.webp" type="image/webp"/>
                            <img loading="lazy" width="40px" src="/img/al-logo-bg.png" alt="Logo AL"/>
                        </picture>
                    </a>
                </div>

                <div className="menu-menu">
                    <a href="" onClick={menu_menu}>
                        <i className="fa-solid fa-bars fa-2xl text-white"></i>
                    </a>
                </div>

                <div className="menu-display">
                    <nav className="container-nav mt-3">
                        <a className="btn btn-c" href="#quien-soy">Quien Soy</a>
                        <a className="btn btn-c" href="#contacto">Contacto</a>
                        <a className="btn btn-c" href="/José Alfredo López Mares.pdf">CV</a>
                    </nav>
                </div>
            </div>
            <div className="container container-presentacion">
                <div className="presentacion">
                    <h1>Hola! Soy <span className="aqua">Alfredo López</span>.</h1>
                    <p>Programador de aplicaciones web, con conocimientos en frontend y backend.</p>
                    <div>
                        <a className="btn btn-a" href="#portafolio">Proyectos</a>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="bg-perfil">
                        <picture>
                            <source srcSet="/img/foto-perfil.avif" type="image/avif"/>
                            <source srcSet="/img/foto-perfil.webp" type="image/webp"/>
                            <img className="img-perfil" src="/img/foto-perfil.png" alt="Imagen Perfil"/>
                        </picture>
                    </div>
                </div>
            </div>
        </header>
        </>
)}