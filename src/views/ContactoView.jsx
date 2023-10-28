export const ContactoView = () => {
    return (
        <>
            <div className="portafolio pb-5" id="contacto">
                <div className="container p-5 form-shw">
                    <h2 className="text-center">Enviame un mensaje</h2>

                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="4c8c1176-1ebe-4003-bd8f-9bc9196bd3d0"/>
                        <div className="row">
                            <div className="col-md-6 mt-2">
                                <label>Nombre:</label>
                                <input className="form-control" type="text" name="nombre" required/>
                            </div>
                            <div className="col-md-6 mt-2">
                                <label>Email:</label>
                                <input className="form-control" type="email" name="email" required/>
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            <label>Asunto:</label>
                            <input type="text" className="form-control" name="asunto" required/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Mensaje:</label>
                            <textarea className="form-control" rows="3" name="mensaje"></textarea>
                        </div>
                        <div className="h-captcha" data-captcha="true"></div>
                        <button className="btn btn-b mt-2" type="submit" id="enviar">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}