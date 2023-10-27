
export const CarouselImage = ({title}) => {

    return (
        
        <div id={title} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <picture>
                        <source srcSet={`/img/${title}1.avif`} type="image/avif"/>
                        <source srcSet={`/img/${title}1.webp`} type="image/webp"/>
                        <img className="proyecto" src={`/img/${title}1.png`} alt={"Imagen " + title}/>
                    </picture>
                </div>
                <div className="carousel-item">
                    <picture>
                        <source srcSet={`/img/${title}1.avif`} type="image/avif"/>
                        <source srcSet={`/img/${title}1.webp`} type="image/webp"/>
                        <img className="proyecto" src={`/img/${title}1.png`} alt={"Imagen " + title}/>
                    </picture>
                </div>
                <div className="carousel-item">
                    <picture>
                        <source srcSet={`/img/${title}1.avif`} type="image/avif"/>
                        <source srcSet={`/img/${title}1.webp`} type="image/webp"/>
                        <img className="proyecto" src={`/img/${title}1.png`} alt={"Imagen " + title}/>
                    </picture>
                </div>
            </div>
            <a className="carousel-control-prev" href={'#' + title} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={'#' + title} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}