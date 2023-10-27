import { useEffect } from "react"
import { AboutView } from "./views/AboutView"
import { ContactoView } from "./views/ContactoView"
import { FooterView } from "./views/FooterView"
import { HeaderView } from "./views/HeaderView"
import { ProyectosView } from "./views/ProyectosView"
import { topAuxiliar } from "./helpers/topAuxiliar"

export const PortafolioApp = () => {

    useEffect(() => {
        window.addEventListener('scroll', topAuxiliar)
    }, []);
    
    return (
        <>
            <HeaderView/>
            <AboutView/>
            <ProyectosView/>
            <ContactoView/>
            <FooterView/>
        </>
)}