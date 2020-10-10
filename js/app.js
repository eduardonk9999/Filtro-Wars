const elementsBtns = document.querySelectorAll('.menu__wars span');
const groupWars = [];




// Button click

function clickBtn() {
    for (const btn of elementsBtns) {



        btn.addEventListener('click', () => {
            if (btn.dataset.item === 'nave') {
                console.log('nave')
                
                // Ver aula ori 0407


                filterElements();
            } else {
                console.log('nao sou nave')
            }
        })
    }
}



// Filter Elements

function filterElements() {
    // const itensNave = groupWars.map((item) => {
    //     return item;
    // });

    const itensNave = groupWars.filter((item) => {
        console.log(item.name)
        return item.name === 'nave';
    })

    console.log(itensNave);
    
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

