
export const FooterView = () => {

    const fecha = new Date();

    return (
        <>
            <footer className="portafolio text-center">
                <nav className="container-nav container pt-4">
                    <a className="btn btn-c" href="#">Inicio</a>
                    <a className="btn btn-c" href="#quien-soy">Quien soy</a>
                    <a className="btn btn-c" href="#portafolio">Portafolio</a>
                    <a className="btn btn-c" href="José Alfredo López Mares.pdf">CV</a>
                </nav>
                <div className="d-flex justify-content-center">
                    <a className="nombre row" href="#header">
                        <picture>
                            <source srcSet="/img/al-logo-bg.avif" type="image/avif"/>
                            <source srcSet="/img/al-logo-bg.webp" type="image/webp"/>
                            <img src="/img/al-logo-bg.png" alt="Logo AL" width="30px"/>
                        </picture>  
                        <p>{fecha.getFullYear()}</p>
                    </a>
                </div>
            </footer>
        </>
    )
}