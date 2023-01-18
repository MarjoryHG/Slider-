let slider = document.querySelector(".slider-contenedor") //aqui recibe la diapostova
let sliderIndividual = document.querySelectorAll(".contenido-slider") //aqui recibe el contenido que esta en la diapositiva
let contador = 1; //que se muestre una diaposyiva
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;//es un intervalo de 3 segundos. Siempre estamos trabajando en milisegundos

window.addEventListener("resize", function(){//resize:
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";/*que en el momento que hago la transicion siempre el ancho de pantalla de una diapostiva se mantenga el mismo ancho de pantalla con el que le sigue, mediante de la transicion*/
    slider.style.transition = "transform .8s";/*aqui */ 
    contador++;/*esta es la variable contador con ++ y define la direccionme muestra lo que esta por delante y lo que esta por detras*/ 

    if(contador == sliderIndividual.length){// si el contador es igual
        setTimeout(function(){
            slider.style.transform = "translate(0px)";//estos son parametros
            slider.style.transition = "transform 0s";// estos son parametros
            contador=1;//estos son parametros
        },1500)
    }
}