import { TecImg } from "../ui/components/TecImg"

export const CRUD = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados">
                
                <h4>CRUD <span className="escolar">*Proyecto Escolar*</span></h4>

                <p className="mb-0">Es una App para crear, editar y eliminar (CRUD) alumnos. Para ello utilizamos AJAX para comunicarnos con el servidor mediante métodos POST, técnica utilizada igualmente  para el inicio de sesión de la aplicación.</p>
                    
                <div className="mb-2">
                    <TecImg param={'html'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'js'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'css'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'bootstrap'}/>

                </div>

                <a href="#" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
    )
}