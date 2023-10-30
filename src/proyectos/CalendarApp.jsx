import { TecImg } from "../ui/components/TecImg"

export const CalendarApp = () => {
    return (
        <>
            <div className="col-lg-4 m-destacados" data-aos="fade-down-right">
                <h4>CalendarApp</h4>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, architecto ipsam! Provident iure eum neque aliquam fuga quas magni perspiciatis similique ipsum ut quod modi enim maxime, cum veniam earum.</p>
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
                <a href="#" className="fa_git">
                    <i className="fa-brands fa-github fa-xl text-white" title="GitHub"></i>
                </a>
            </div>
        </>
    )
}