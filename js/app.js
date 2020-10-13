const elementsBtns = document.querySelectorAll('.menu__wars span');
const groupWars = [];




// Button click

function clickBtn() {
    for (const btn of elementsBtns) {



        btn.addEventListener('click', () => {
            if (btn.dataset.item === 'nave') {
                console.log('nave')
                filterElements(btn.dataset.item);
            } else {
                console.log('nao sou nave')
            }
            if (btn.dataset.item === 'jedi') {
                console.log('jedi')
                filterElements(btn.dataset.item);
            } else {
                console.log('nao sou jedi')
            }
            if (btn.dataset.item === 'piloto') {
                console.log('piloto')
                filterElements(btn.dataset.item);
            } else {
                console.log('nao sou piloto')
            }
        })
    }
}



// Filter Elements

function filterElements(par) {
    

    const itensNave = groupWars.filter((item) => {
        if(item.name === `${par}`){
            console.log(item.name);

            const divsUnico = document.querySelectorAll('.personas__wars div');

            for (const divUnico of divsUnico) {
                if(divUnico.getAttribute('data-filterwars') === `${par}`){
                    divUnico.classList.add('active');
                }
                else{
                    divUnico.classList.remove('active');
                }
                

                
            }
            
        }
        
    })

    console.log(itensNave); // array vazio

   
    
}




// Constroi Array

function construcArray() {
    const listWars = document.querySelectorAll('.personas__wars div');

    for (const warsElement of listWars) {
        groupWars.push({ "name": warsElement.dataset.filterwars })
        
    }
}




function initAll() {
    construcArray();
    clickBtn();


}

initAll();

