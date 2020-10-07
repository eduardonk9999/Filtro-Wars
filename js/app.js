

const elementosBtns = document.querySelectorAll('.menu__wars span');

elementosBtns.forEach((elementoBtn) => {

    
    elementoBtn.addEventListener('click', () => {
        
        
        console.log(elementoBtn.dataset)
        if('jedi' == elementoBtn.dataset.item){
            console.log('Sou um Jedi')
            filtro();
        } else{
            console.log('Não sou um jedi')
        }

        
    })




})


function filtro(){
    
    const elemento = document.querySelectorAll('.elemento');


    let itensStarWars = document.querySelectorAll(".personas__wars div");
    itensStarWars = Array.from(itensStarWars);
    
    const mapItens = itensStarWars.map((item) => {
        return item.dataset;
    })
    
    const jedi = ({ filter }) => filter === 'jedi';
    
    const jedis = mapItens.filter(jedi);
    
    if(elemento.dataset === jedis){
    
    }



    
    
}
