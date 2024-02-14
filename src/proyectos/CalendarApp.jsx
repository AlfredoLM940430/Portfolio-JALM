import { TecImg } from "../ui/components/TecImg"

export const CalendarApp = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados" data-aos="fade-down-right">
                <h4>CalendarApp</h4>
                <p className="mb-0">Desarollo utilizando <span className="aqua">MERN</span>. La función de esta aplicación es la de agendar, modificar, o eliminar eventos y fechas. Dichos eventos visibles para todos, pero editables solo para el responsable del evento mediante tokens de usuario.</p>
                <div className="mb-2">

                    <TecImg param={'react'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'node'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'mongo'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'css'}/>
                    <span className="aqua m-1">||</span>

                    <TecImg param={'bootstrap'}/>
                </div>
                <a href="https://github.com/AlfredoLM940430/Calendar-Frontend.git" className="mr-2">
                    <i className="fa-brands fa-github fa-xl text-white" title="Frontend"></i>
                </a>
                <a href="https://github.com/AlfredoLM940430/Calendar-Backend.git" className="mr-2">
                    <i className="fa-brands fa-github fa-xl text-white" title="Backend"></i>
                </a>
            </div>
        </>
    )
}