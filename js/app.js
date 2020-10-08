const elementsBtns = document.querySelectorAll('.menu__wars span');
const elementsWars = [];


elementsBtns.forEach((elementoBtn) => {

    
    elementoBtn.addEventListener('click', () => {
        
        InitListWars();
        filtro();

        // if(elementoBtn.dataset.item === 'nave'){
        //     console.log("sou uma nave");
        // } else {
        //     console.log("Não sou uma nave")
        // }

    })




})


function filtro(){
    
    const mapWars = elementsWars.map( (el) => {
        return el;
    });

    console.log(mapWars)
     


    
   


    
    
}


// Cria Array de Objetos

function InitListWars(el){

    const elementsLists = document.querySelectorAll('.personas__wars div');

    elementsLists.forEach( (element) => {
        elementsWars.push(element.dataset.filter)
    });
    

}
