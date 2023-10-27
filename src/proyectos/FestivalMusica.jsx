import { TecImg } from "../ui/components/TecImg"

export const FestivalMusica = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados" data-aos="fade-up-left">
                
                <h4>Festival Musica</h4>

                <p className="mb-0">Este proyecto es una pagina estática, primer contacto con el workflow de <span className="aqua">Gulp</span> y sus diferentes herramientas, principalmente con SASS, ademas de gestión formatos de imagen moderno compilados por esta herramienta.</p>

                <div className="mb-2">
                    <TecImg param={'html'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'js'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'sass'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'gulp'}/>
                </div>

                <a href="https://github.com/AlfredoLM940430/Festival-Musica.git" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
)}