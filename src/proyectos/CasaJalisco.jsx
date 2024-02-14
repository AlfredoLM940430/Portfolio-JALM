import { TecImg } from "../ui/components/TecImg"

export const CasaJalisco = () => {
    return (
        <div className="col-lg-4 m-destacados" data-aos="fade-up-right">

            <div className="casa-jalisco">
                <h4>CasaJalisco</h4>
                <img src="/img/single-gear.gif" alt="gif" />
            </div>        

           <p className="mb-0">Aplicación en construcción utilizando <span className="aqua">MERN</span>. Al estar finalizada esta App sera capaz de gestionar la compra y asignación de boletos a los usuarios para sorteo. Ademas de un panel de control (CRUD) para tareas administrativas.</p>

           <div className="mb-2">
                <TecImg param={'react'}/>
                <span className="aqua m-1">||</span>

                <TecImg param={'node'}/>
                <span className="aqua m-1">||</span>

                <TecImg param={'mongo'}/>
                <span className="aqua m-1">||</span>

                <TecImg param={'sass'}/>
                <span className="aqua m-1">||</span>

                <TecImg param={'bootstrap'}/>
            </div>

            {/* <a href="" className="fa_git">
                <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
            </a> */}
        </div>
)}