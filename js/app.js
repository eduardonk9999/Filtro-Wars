

const elementosBtns = document.querySelectorAll('.menu__wars span');

elementosBtns.forEach((elementoBtn) => {

    elementoBtn.addEventListener('click', filtro)




})


function filtro(){
    console.log(this.dataset);


    let itensStarWars = document.querySelectorAll(".personas__wars div");
    itensStarWars = Array.from(itensStarWars);
    
    const mapItens = itensStarWars.map((item) => {
        return item.dataset;
    })
    
    const jedi = ({ filter }) => filter === 'jedi'

    console.log(mapItens.filter(jedi))
    
    
}
