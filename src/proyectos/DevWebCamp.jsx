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
                                <i className="fa-brands fa-github fa-xl" title="GitHub"></i>
                            </a>
                        </div>
                    </div>
                    <div className="right-right" data-aos="fade-left">

                        <CarouselImage title={'camp'} img={6} />

                        {/* <div id="camp" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <picture>
                                        <source srcset="build/img/camp1.avif" type="image/avif">
                                        <source srcset="build/img/camp1.webp" type="image/webp">
                                        <img className="proyecto" src="build/img/camp1.png" alt="Imagen Proyecto">
                                    </picture>
                                </div>
                                <div className="carousel-item">
                                    <picture>
                                        <source srcset="build/img/camp2.avif" type="image/avif">
                                        <source srcset="build/img/camp2.webp" type="image/webp">
                                        <img className="proyecto" src="build/img/camp2.png" alt="Imagen Proyecto">
                                    </picture>
                                </div>
                                <div className="carousel-item">
                                    <picture>
                                        <source srcset="build/img/camp3.avif" type="image/avif">
                                        <source srcset="build/img/camp3.webp" type="image/webp">
                                        <img className="proyecto" src="build/img/camp3.png" alt="Imagen Proyecto">
                                    </picture>
                                </div>
                                <div className="carousel-item">
                                    <picture>
                                        <source srcset="build/img/camp4.avif" type="image/avif">
                                        <source srcset="build/img/camp4.webp" type="image/webp">
                                        <img className="proyecto" src="build/img/camp4.png" alt="Imagen Proyecto">
                                    </picture>
                                </div>
                                <div className="carousel-item">
                                    <picture>
                                        <source srcset="build/img/camp5.avif" type="image/avif">
                                        <source srcset="build/img/camp5.webp" type="image/webp">
                                        <img className="proyecto" src="build/img/camp5.png" alt="Imagen Proyecto">
                                    </picture>
                                </div>
                                <div className="carousel-item">
                                    <picture>
                                        <source srcset="build/img/camp6.avif" type="image/avif">
                                        <source srcset="build/img/camp6.webp" type="image/webp">
                                        <img className="proyecto" src="build/img/camp6.png" alt="Imagen Proyecto">
                                    </picture>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#camp" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#camp" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                        </div> */}
                    </div>


                </div>
            </section>
        </>
)}