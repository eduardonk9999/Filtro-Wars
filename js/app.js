const elementsBtns = document.querySelectorAll('.menu__wars span');
const groupWars = [];




// Button click

function clickBtn() {
    for(const btn of elementsBtns){
        btn.addEventListener('click', filterElements)
    }
}



// Filter Elements

function filterElements(){
    
    console.log(groupWars)


}



// Constroi Array

function construcArray() {
    const listWars = document.querySelectorAll('.personas__wars div');
    
    for (const warsElement of listWars) {
        groupWars.push({"name": warsElement.dataset.filterwars})        
    }
}




function initAll(){
    construcArray();
    clickBtn();
 

}

initAll();

