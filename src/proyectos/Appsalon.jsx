import { TecImg } from "../ui/components/TecImg"

export const Appsalon = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados" data-aos="fade-down">
                
                <h4>AppSalon</h4>

                <p className="mb-0">Aplicación en <span className="aqua">PHP</span> & <span className="aqua">MySQL</span>, de un salón de belleza. La App gestiona usuarios y administradores. Los usuarios mediante registro, puede agendar citas y servicios. Administradores pueden agregar o quitar servicios, horas y días disponibles.</p>
                    
                <div className="mb-2">
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

                <a href="https://github.com/AlfredoLM940430/APPSALON_MVC.git" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
    )
}