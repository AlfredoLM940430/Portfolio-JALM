import { TecImg } from "../ui/components/TecImg"

export const Eventos = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados">
                
                <h4>Eventos <span className="escolar">*Proyecto Escolar*</span></h4>
                <p className="mb-0">Es una aplicación que nos ayuda a registrar y agendar eventos, tiene funcionalidad CRUD ademas y principalmente se enfoco en el manejo y adaptación a un proyecto del Plug-in TempusDominus para la gestión fecha y hora en la aplicación. Se utiliza AJAX para la comunicación entre la aplicación y el servidor..</p>
                    
                <div className="mb-2">
                    <TecImg param={'html'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'js'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'css'}/>
                </div>

                <a href="https://github.com/AlfredoLM940430/Agenda-Practica.git" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
    )
}