import { CarouselImage } from "../ui/components/CarouselImage"
import { TecImg } from "../ui/components/TecImg"

export const BienesRaices = () => {
    return (
        <>
            <section className="container-pr">
                <div className="container-left contenido bg-opacity1 container">
                    
                    <div className="left-left contenido" data-aos="fade-right">
                        <CarouselImage title={'br'} />
                    </div>

                    <div className="right-left contenido" data-aos="fade-left">
                        <div>
                            <h5>Bienes Raices</h5>

                            <p className="desc-pro">Proyecto realizado con <span className="aqua">PHP</span> & <span className="aqua">MySQL</span>, enfocando en aprender y desarrollar el CRUD de propiedades y vendedores. Este proyecto se realizo con tres arquitecturas diferentes, <span className="aqua">Espaguetti</span>, <span className="aqua">POO</span> y <span className="aqua">MVC</span> con la finalidad de analizar y aprender los diferentes métodos de arquitectura utilizados y comprender sus ventajas y desventajas.</p>

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

                            <a href="https://github.com/AlfredoLM940430/BienesRaices-Espaguetti.git" className="mr-2">
                                <i className="fa-brands fa-github fa-xl text-white" title="Espaguetti"></i>
                            </a>
                            <a href="https://github.com/AlfredoLM940430/BienesRaices-POO.git" className="mr-2">
                                <i className="fa-brands fa-github fa-xl text-white" title="POO"></i>
                            </a>
                            <a href="https://github.com/AlfredoLM940430/BienesRaices-MVC.git" className="mr-2">
                                <i className="fa-brands fa-github fa-xl text-white" title="MVC"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </section>  
        </>
)}