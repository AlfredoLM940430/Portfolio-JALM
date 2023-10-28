import { useState } from "react";

export const useRender = (value) => {

    const [isShow, setIsShow] = useState(value);

    let botonDown = `
    <div id="remplazoDown">
        <p class="m-0 text-center">Mas Proyectos</p>
        <i class="fa-solid fa-chevron-down" style="color: #ffffff;"></i>
    </div>
    `;

    const botonUp = `
    <div id="remplazo">
        <i class="fa-solid fa-chevron-up" style="color: #ffffff;"></i>
    </div>
    `;

    const masToggle = (e) => {
        
        let estado = isShow;
        
        if(e.target.className.includes("fa-chevron-down") || (e.target.innerHTML === 'Mas Proyectos') || (e.target.id === 'remplazoDown')) {
            document.getElementById('remplazoDown').innerHTML = '';
            document.getElementById('remplazoDown').innerHTML = botonUp;
        } else {
            document.getElementById('remplazo').innerHTML = '';
            document.getElementById('remplazo').innerHTML = botonDown;
        }

        setIsShow(estado = !estado);
    }
    
    return {
        masToggle,
        isShow,
    }
}