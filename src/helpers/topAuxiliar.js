export const topAuxiliar = () => {

    const auxiliar = document.getElementsByClassName('auxiliar')[0];
    const sobreQS = document.getElementById('quien-soy');

    if(sobreQS.getBoundingClientRect().top <= 0) {
        auxiliar.style.display = "block";
    } else {
        auxiliar.style.display = "none";
    }
}