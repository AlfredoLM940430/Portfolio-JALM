import { TecImg } from "../ui/components/TecImg"

export const BlogCafe = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados">
                
                <h4>Blog Café</h4>
                <p className="mb-0">Primeros pasos en "desarrollo web", maquetación en HTML, etiquetas, atributos, etc. así como CSS.</p>
                    
                <div className="mb-2">
                    <TecImg param={'html'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'css'}/>
                </div>

                <a href="https://github.com/AlfredoLM940430/BlogCafe.git" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
    )
}