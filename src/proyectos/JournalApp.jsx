import { CarouselImage } from "../ui/components/CarouselImage"
import { TecImg } from "../ui/components/TecImg"

export const JournalApp = () => {
    return (
        <>
            <section className="container-pr">
                <div className="container-left contenido bg-opacity1 container">
                    
                    <div className="left-left contenido" data-aos="fade-right">
                        <CarouselImage title={'journalapp'} />
                    </div>

                    <div className="right-left contenido" data-aos="fade-left">
                        <div>
                            <h5>JournalApp</h5>

                            <p className="desc-pro">Es una aplicación con <span className="aqua">React</span> para crear notas, de ser necesario con imágenes, cuenta con registro y autenticación utilizando los servicios de <span className="aqua">Google</span>  en caso de requerirse. El proyecto cuenta con base de datos en <span className="aqua">Firebase</span>  donde se gestiona la app y <span className="aqua">Cloudinary</span> para la gestión de las imágenes. El fin de este proyecto es un primer contacto con <span className="aqua">Redux Devtools.</span></p>

                            <div className="mb-3">

                                <TecImg param={'react'}/>
                                <span className="aqua m-1">||</span>

                                <TecImg param={'node'}/>
                                <span className="aqua m-1">||</span>

                                <TecImg param={'firebase'}/>
                                <span className="aqua m-1">||</span>

                                <TecImg param={'css'}/>
                                <span className="aqua m-1">||</span>

                                <TecImg param={'bootstrap'}/>
                            </div>

                            <a href="https://github.com/AlfredoLM940430/JournalApp.git" className="mr-2">
                                <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}