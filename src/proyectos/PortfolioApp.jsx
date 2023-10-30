import { TecImg } from "../ui/components/TecImg"

export const PortfolioApp = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados" data-aos="fade-up-left">
                
                <h4>Mi Portafolio</h4>

                <p className="mb-0">Proyecto realizado con <span className="aqua">React</span>, siguiendo las buenas practicas recomendadas (directorios, componentes, hooks), ademas de añadir SASS y BOOTSTRAP en el proyecto. La gestión del envió de email se realizo con ayuda de web3forms. </p>

                <div className="mb-2">
                    <TecImg param={'react'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'sass'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'bootstrap'}/>
                </div>

                <a href="https://github.com/AlfredoLM940430/Portfolio-JALM.git" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
    )
}