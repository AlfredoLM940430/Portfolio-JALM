import { Appsalon, AsistenciaApp, BienesRaices, BlogCafe, CRUD, CalendarApp, DevWebCamp, Eventos, FestivalMusica, GifExpertApp, HeroesApp, JournalApp, UpTask } from "../proyectos/";
import { useRender, useAuxiliar } from "../helpers/";
import { AuxView } from "./AuxView";
import { PortfolioApp } from "../proyectos/PortfolioApp";

export const ProyectosView = () => {

    const {isAux} = useAuxiliar();
    const {isShow, masToggle} = useRender(false);

    return (
        <>
            {isAux && <AuxView/>}
            <div className="portafolio p-3" id="portafolio">
                <h2 className="text-center">Proyectos</h2>
                <JournalApp/>
                <DevWebCamp/>
                <BienesRaices/>

                <h4 className="text-center pt-5 m-4 text-white">Mas Proyectos Destacados</h4>  
                <div className="row d-flex justify-content-center">
                    <CalendarApp/>
                    <Appsalon/>
                    <HeroesApp/>
                </div>
                <div className="row d-flex justify-content-center">
                    <GifExpertApp/>
                    <UpTask/>
                    <PortfolioApp/>
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
                                <FestivalMusica/>
                                <AsistenciaApp/>
                                <Eventos/>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <CRUD/>
                                <BlogCafe/>
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}