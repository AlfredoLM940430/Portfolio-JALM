import { TecImg } from "../ui/components/TecImg"

export const UpTask = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados" data-aos="fade-up">
                
                <h4>UpTask</h4>
                <p className="mb-0">Aplicación de administración de proyectos. Tiene como funcionalidad agregar pendientes, modificar o eliminar tareas a proyectos agregados. Cuenta con registro e inicio, cambios de contraseña y usuario, todo esto mediante confirmación por correo.</p>

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

                <a href="https://github.com/AlfredoLM940430/UpTask.git" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
    )
}