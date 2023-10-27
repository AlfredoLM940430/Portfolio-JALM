import { TecImg } from "../ui/components/TecImg"

export const HeroesApp = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados" data-aos="fade-up-right">
                
                <h4>HeroesApp</h4>

                <p className="mb-0">Aplicación con <span className="aqua">React</span>. Con esta App se busca la asimilación de algunos conceptos, Single Page Application, multiples routers, protección de rutas, query params. La funcionalidad consiste en un buscador de héroes y navegación entre paginas.</p>

                <div className="mb-2">
                    <TecImg param={'react'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'css'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'bootstrap'}/>
                </div>

                <a href="https://github.com/AlfredoLM940430/HeroesApp.git" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
)}