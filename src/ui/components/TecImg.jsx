
export const TecImg = ({param}) => {

    switch (param) {
        case 'react':
            return (
                <picture>
                    <source srcSet="/img/React.avif" type="image/avif"/>
                    <source srcSet="/img/React.webp" type="image/webp"/>
                    <img src="/img/React.png" alt="Imagen React" className="react" title="React"/>
                 </picture>
            );

        case 'node':
            return (
                <picture>
                    <source srcSet="/img/Node_JS.avif" type="image/avif"/>
                    <source srcSet="/img/Node_JS.webp" type="image/webp"/>
                    <img src="/img/Node_JS.png" alt="Imagen NodeJS" className="node" title="NodeJs"/>
                </picture>
            );

        case 'firebase':
            return (
                <picture>
                    <source srcSet="/img/Firebase.avif" type="image/avif"/>
                    <source srcSet="/img/Firebase.webp" type="image/webp"/>
                    <img src="/img/Firebase.png" alt="Firebase" className="firebase" title="Firebase"/>
                </picture>
            );

        case 'css':
            return (
                <picture>
                    <source srcSet="/img/CSS.avif" type="image/avif"/>
                    <source srcSet="/img/CSS.webp" type="image/webp"/>
                    <img src="/img/CSS.png" alt="CSS3" className="css" title="CSS3"/>
                </picture>
            );

        case 'bootstrap':
            return (
                <picture>
                    <source srcSet="/img/Bootstrap.avif" type="image/avif"/>
                    <source srcSet="/img/Bootstrap.webp" type="image/webp"/>
                    <img src="/img/Bootstrap.png" alt="Bootstrap" className="bootstrap" title="Bootstrap"/>
                </picture>
            );

        case 'php':
            return (
                <picture>
                    <source srcSet="/img/PHP.avif" type="image/avif"/>
                    <source srcSet="/img/PHP.webp" type="image/webp"/>
                    <img src="/img/PHP.png" alt="PHP" className="php" title="PHP"/>
                </picture>  
            );

        case 'js':
            return (
                <picture>
                    <source srcSet="/img/JS.avif" type="image/avif"/>
                    <source srcSet="/img/JS.webp" type="image/webp"/>
                    <img src="/img/JS.png" alt="Javascript" className="js" title="Javascript"/>
                </picture>  
            );

        case 'sass':
            return (
                <picture>
                    <source srcSet="/img/SASS.avif" type="image/avif"/>
                    <source srcSet="/img/SASS.webp" type="image/webp"/>
                    <img src="/img/SASS.png" alt="SASS" className="sass" title="SASS"/>
                </picture> 
            );

        case 'sql':
            return (
                <picture>
                    <source srcSet="/img/MySQL.avif" type="image/avif"/>
                    <source srcSet="/img/MySQL.webp" type="image/webp"/>
                    <img src="/img/MySQL.png" alt="MySQL" className="sql" title="MySQL"/>
                </picture> 
            );

        case 'gulp':
            return (
                <picture>
                    <source srcSet="/img/Gulp.js.avif" type="image/avif"/>
                    <source srcSet="/img/Gulp.js.webp" type="image/webp"/>
                    <img src="/img/Gulp.js.png" alt="Gulp" className="gulp" title="Gulp"/>
                </picture> 
            );

        case 'mongo':
            return (
                <picture>
                    <source srcSet="/img/MongoDB.avif" type="image/avif"/>
                    <source srcSet="/img/MongoDB.webp" type="image/webp"/>
                    <img src="/img/MongoDB.png" alt="Gulp" className="gulp" title="Gulp"/>
                </picture> 
            );

        case 'html':
            return (
                <picture>
                    <source srcSet="/img/HTML5.avif" type="image/avif"/>
                    <source srcSet="/img/HTML5.webp" type="image/webp"/>
                    <img src="/img/HTML5.png" alt="Gulp" className="html" title="Gulp"/>
                </picture> 
            );
    
        default:
            break;
    }

    return (
        <>
            {this.TecImg(param)}
        </>
    )
}