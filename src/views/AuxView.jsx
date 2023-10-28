export const AuxView = () => {

    return (
        <>
            <a className="auxiliar" href="#header">
                <picture>
                    <source srcSet="/img/al-logo-bg.avif" type="image/avif"/>
                    <source srcSet="/img/al-logo-bg.webp" type="image/webp"/>
                    <img loading="lazy" width="40px" src="/img/al-logo-bg.png" alt="Logo AL"/>
                </picture>
            </a>
        </>
)}