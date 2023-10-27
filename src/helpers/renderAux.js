export const renderAux = (e) => {

    const menuAuxiliar = document.getElementsByClassName('menu-display');
    const menuFoto = document.getElementsByClassName('bg-perfil');
    const noMargin = document.getElementsByClassName('container-presentacion');

    let seletor = menuAuxiliar[0].style.display;
    if (seletor == '' || seletor == 'none') {
        menuAuxiliar[0].style.display = 'block';
        menuFoto[0].style.display = 'none';
        noMargin[0].style.marginTop = '0';
    } else if(seletor == 'block') {
        menuAuxiliar[0].style.display = 'none';
        menuFoto[0].style.display = 'block'
        noMargin[0].style.marginTop = '112px';
    }
    
    return;
}