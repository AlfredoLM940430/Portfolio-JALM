export const sizeAuxiliar = (e) => {

    const menuAuxiliar = document.getElementsByClassName('menu-display');
    const menuFoto = document.getElementsByClassName('bg-perfil');
    const noMargin = document.getElementsByClassName('container-presentacion');

    if(e.currentTarget.innerWidth > 480) {
        menuAuxiliar[0].style.display = "block";
        menuFoto[0].style.display = "block"
        noMargin[0].style.marginTop = "0";
    } else {
        menuAuxiliar[0].style.display = "none";
        noMargin[0].style.marginTop = "112px";
    }
           
    return;
}