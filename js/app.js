const elementsBtns = document.querySelectorAll('.menu__wars span');
const groupWars = [];




// Button click

function clickBtn() {
    for (const btn of elementsBtns) {



        btn.addEventListener('click', () => {
            if (btn.dataset.item === 'nave' ) {
                filterElements(btn.dataset.item);
            } else {
                console.log('nao sou nave')
            }
            if (btn.dataset.item === 'jedi') {
                filterElements(btn.dataset.item);
            } else {
                console.log('nao sou jedi')
            }
            if (btn.dataset.item === 'pilot') {
                filterElements(btn.dataset.item);
            } else {
                console.log('nao sou pilot')
            }
            if (btn.dataset.item === 'dark') {
                filterElements(btn.dataset.item);
            } else {
                console.log('nao sou dark')
            }
            if (btn.dataset.item === 'droid') {
                filterElements(btn.dataset.item);
            } else {
                console.log('nao sou droid')
            }
        })
    }
}



// Filter Elements

function filterElements(par) {
    const itensNave = groupWars.filter((item) => {
        if(item.name === `${par}`){
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

