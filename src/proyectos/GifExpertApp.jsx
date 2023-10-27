import { TecImg } from "../ui/components/TecImg"

export const GifExpertApp = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados" data-aos="fade-down-left">
                
                <h4>GifExpertApp</h4>

                <p className="mb-0">Primer contacto con <span className="aqua">React</span>, <span className="aqua">(</span>Custom Hooks, Fetch API, Comunicación entre componentes, métodos como argumentos<span className="aqua">)</span>. La funcionalidad de esta app es la de mostrar gifs que el usuario busque.</p>

                <div className="mb-2">

                    <TecImg param={'react'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'css'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'bootstrap'}/>

                </div>
                <a href="https://github.com/AlfredoLM940430/GifApp-React.git" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
)}