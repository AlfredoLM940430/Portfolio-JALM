import { CarouselImage } from "../ui/components/CarouselImage"
import { TecImg } from "../ui/components/TecImg"

export const DevWebCamp = () => {
    return (
        <>
            <section className="container-pr">
                <div className="container-right contenido bg-opacity2 container">
                    <div className="left-right contenido" data-aos="fade-right">
                        <div>
                            <h5>DevWebCamp</h5>
                            <p className="desc-pro">Aplicación de venta de tickets, desarrollado en <span className="aqua">PHP</span> cuenta con una arquitectura <span className="aqua">MVC</span>. La App cuanta con la funcionalidades de registro de usuarios y compra de tickets.
                                el registro se gestiona mediante confirmación por email del usuario y la venta es gestiona con los servicios de <span className="aqua">PayPal</span>. Ademas de un CRUD para el admin.</p>
                            <div className="mb-3">

                                <TecImg param={'php'}/>                              
                                <span className="aqua m-1">||</span>
                                
                                <TecImg param={'js'}/>  
                                <span className="aqua m-1">||</span>

                                <TecImg param={'sass'}/>  
                                <span className="aqua m-1">||</span>

                                <TecImg param={'sql'}/>  
                                <span className="aqua m-1">||</span>

                                <TecImg param={'gulp'}/>  
                            </div>
                            <a href="https://github.com/AlfredoLM940430/DEVWEBCAMP_MVC.git" className="mr-2">
                                <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                            </a>
                        </div>
                    </div>
                    <div className="right-right" data-aos="fade-left">
                        <CarouselImage title={'camp'} img={6} />
                    </div>


                </div>
            </section>
        </>
    )
}