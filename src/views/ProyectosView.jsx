import { useState } from "react";
import { Appsalon } from "../proyectos/Appsalon";
import { AsistenciaApp } from "../proyectos/AsistenciaApp";
import { BienesRaices } from "../proyectos/BienesRaices";
import { BlogCafe } from "../proyectos/BlogCafe";
import { CRUD } from "../proyectos/CRUD";
import { CalendarApp } from "../proyectos/CalendarApp";
import { DevWebCamp } from "../proyectos/DevWebCamp";
import { Eventos } from "../proyectos/Eventos";
import { FestivalMusica } from "../proyectos/FestivalMusica";
import { GifExpertApp } from "../proyectos/GifExpertApp";
import { HeroesApp } from "../proyectos/HeroesApp";
import { JournalApp } from "../proyectos/JournalApp";
import { UpTask } from "../proyectos/UpTask";
import { isRender } from "../helpers/isRender";

export const ProyectosView = () => {

    const {isShow, masToggle} = isRender(false);

    return (
        <>
            <div className="portafolio p-3" id="portafolio">
                <h2 className="text-center">Proyectos</h2>
                <JournalApp/>
                <DevWebCamp/>
                <BienesRaices/>
                <h4 className="text-center mb-4 text-white">Mas Proyectos Destacados</h4>  
                
                <div className="row d-flex justify-content-center">
                    <CalendarApp/>
                    <Appsalon/>
                    <GifExpertApp/>
                </div>
                <div className="row d-flex justify-content-center">
                    <HeroesApp/>
                    <UpTask/>
                    <FestivalMusica/>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="btn" id="max" title="Más Proyectos" onClick={masToggle}>
                        <div id="remplazoDown">
                            <p className="m-0 text-center">Mas Proyectos</p>
                            <i className="fa-solid fa-chevron-down text-white"></i>
                        </div>
                    </div>
                </div>

                {
                    isShow && (
                        <div className="mas-proyectos mb-4" id="proyectos">
                            <div className="row d-flex justify-content-center">
                                <BlogCafe/>
                                <AsistenciaApp/>
                                <Eventos/>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <CRUD/>
                            </div>
                        </div>
                    )
                }

            </div>
            
        </>
)}