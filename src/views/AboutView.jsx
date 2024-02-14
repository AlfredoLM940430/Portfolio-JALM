export const AboutView = () => {
    return (
        <>
            <div className="quien-soy d-flex justify-content-around align-items-center" id="quien-soy"> 
                <div className="blur" id="blur">
                    <div className="tabs">
                    <div className="tab-2">
                        <label htmlFor="tab2-2">¿Quién soy?</label>
                        <input id="tab2-2" name="tabs-two" type="radio" defaultChecked="checked"/>
                        <div>
                        <h4 className="about-h">Sobre mi</h4>
                            <p className="aqua"></p>
                                <p className="tec-tab ml-3"><span className="text-white">Nombre:</span> "José Alfredo López Mares"<span className="aqua">;</span></p>
                                <p className="tec-tab ml-3 mt-2"><span className="text-white">Descripción:</span> <span className="aqua">&#123;[</span>"Hola! Mi nombre es José Alfredo, soy un persona que constantemente busca el aprendizaje continuo y nuevos retos con el fin de seguir desarrollándome profesionalmente. Mi objetivo principal es cumplir con mis metas profesionales y personales."<span className="aqua">],</span></p>
                                <p className="tec-tab ml-3"><span className="aqua">[</span>"Mi experiencia consta de trabajo autodidacta, practicas profesionales y algunos proyectos personales. Actualmente trabajando en una pequeña pagina de sorteos con React y NodeJS."<span className="aqua">]&#125;</span></p>
                        </div>
                    </div>
                    <div className="tab-2">
                    <label htmlFor="tab2-1">Perfil</label>
                        <input id="tab2-1" name="tabs-two" type="radio"/>
                        <div>
                        <h4 className="about-h">Habilidades</h4>
                            <div className="tecnologias-habilidades">
                                <div className="container-tab">
                                    <p>FrontEnd: <span className="aqua">[</span></p>
                                    <p className="tec-tab ml-4">"HTML"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"Javascript"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"JQuery"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"React"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"CSS"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"Bootstrap"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"SASS"<span className="aqua">,</span></p>
                                    <p className="aqua">]</p>
                                </div>
                                <div className="container-tab ml-2">
                                    <p>BackEnd: <span className="aqua">[</span></p>
                                    <p className="tec-tab ml-4">"PHP"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"NodeJS"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"MySQL"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"Firebase"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"MongoDB"<span className="aqua">,</span></p>
                                    <p className="aqua">]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}