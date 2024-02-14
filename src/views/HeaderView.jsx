import { useEffect, useState } from "react";
import { useSize, useMenuRender } from "../helpers/";

export const HeaderView = () => {  
    
    const {isMenu, isMargin, isFoto, onMenuBurger} = useMenuRender();

    useEffect(() => {
        ['resize','load'].forEach( event => window.addEventListener(event, useSize));
    }, []);

    return (
        <>
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

                <div className="menu-menu" onClick={onMenuBurger}>
                    <a href="">
                        <i className="fa-solid fa-bars fa-2xl text-white"></i>
                    </a>
                </div>

                <div className="menu-display" style={{display: isMenu}}>
                    <nav className="container-nav mt-3">
                        <a className="btn btn-c" href="#quien-soy">Quien Soy</a>
                        <a className="btn btn-c" href="#contacto">Contacto</a>
                        <a className="btn btn-c" href="/CV_Jos_Alf_Lop_Mar.pdf">CV</a>
                    </nav>
                </div>

            </div>
            <div className="container container-presentacion" style={{marginTop: isMargin}}>
                <div className="presentacion">
                    <h1>Hola! Soy <span className="aqua">Alfredo López</span>.</h1>
                    <p>Programador en aplicaciones web, con conocimientos en desarrollo front-end y back-end.</p>
                    <div>
                        <a className="btn btn-a" href="#portafolio">Proyectos</a>
                    </div>
                </div>
                <div className="mt-4">

                <div className="bg-perfil" style={{display: isFoto}}>
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
    )
}