export const AboutView = () => {
    return (
        <>
            <div className="quien-soy d-flex justify-content-around align-items-center" id="quien-soy"> 
                <div className="blur" id="blur">
                    <div className="tabs">
                    <div className="tab-2">
                        <label htmlFor="tab2-1">Perfil</label>
                        <input id="tab2-1" name="tabs-two" type="radio" defaultChecked="checked"/>
                        <div>
                            <h4>Perfil</h4>
                            <p className="aqua"></p>
                                <p className="tec-tab ml-3"><span className="text-white">Nombre:</span> "José Alfredo López Mares"<span className="aqua">,</span></p>
                                <p className="tec-tab ml-3"><span className="text-white">Descripcion:</span> "Siempre en busca del aprendizaje continuo, ademas de apasionado al mundo de las tecnologías, constantemente en busca de ampliar mis conocimientos y seguir desarrollándome en el mundo profesional, con el objetivo de cumplir con mis metas profesionales y personales. Mi curiosidad por simplificar diferentes aspectos del día a día aunado por el de las tecnologías me llevaron al camino de la ingeniería y de esta a una rama tan satisfactoria como el desarrollo de software."<span className="aqua">,</span></p>
                            <p className="aqua"></p>
                        </div>
                    </div>
                    <div className="tab-2">
                        <label htmlFor="tab2-2">Habilidades</label>
                        <input id="tab2-2" name="tabs-two" type="radio"/>
                        <div>
                            <h4>Tecnologias</h4>
                            <div className="tecnologias-habilidades">
                                <div className="container-tab">
                                    <p>FrontEnd: <span className="aqua">[</span></p>
                                    <p className="tec-tab ml-4">"HTML"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"CSS"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"SASS"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"Bootstrap"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"Javascript"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"JQuery"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"React"<span className="aqua">,</span></p>
                                    <p className="aqua">]</p>
                                </div>
                                <div className="container-tab ml-2">
                                    <p>BackEnd: <span className="aqua">[</span></p>
                                    <p className="tec-tab ml-4">"PHP"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"NodeJS"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"MySQL"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"Firebase"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"MongoDB"<span className="aqua">,</span></p>
                                    <p className="tec-tab ml-4">"Javascript"<span className="aqua">,</span></p>
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