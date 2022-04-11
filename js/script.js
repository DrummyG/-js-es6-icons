let items = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];
// funzione che crea colori random
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let box = document.getElementById('box')
// funzione che crea le card
function create(array){
    box.innerHTML = ''
    array.forEach((element) => {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let item = document.createElement('i')
        item.setAttribute('class', `fa-solid ${element.prefix}${element.name}`)
        item.setAttribute('style', `color:${getRandomColor()}`)
        let desc = document.createElement('p')
        desc.innerHTML = `${element.name}`
        box.append(card)
        card.append(item)
        card.append(desc)
    })
}
create(items)
// funzione che crea il select
function selector(){
    let top = document.getElementById('selector')
    let select = document.createElement('select')
    select.setAttribute('id', 'sort')
    top.append(select)
    let opzioni = ['all', 'animal', 'vegetable', 'user']
    opzioni.forEach((element) => {
        let option = document.createElement('option')
        option.setAttribute('value', `${element}`)
        option.innerHTML = `${element}`
        select.append(option)
    })
}
selector()
// funzione che filtra gli elementi
let sort = document.getElementById('sort')
sort.addEventListener('change', () =>{
    if(sort.value === 'animal'){
        const filtered = items.filter(word => word.type === 'animal')
        create(filtered)
    } else if(sort.value === 'vegetable'){
        const filtered = items.filter(word => word.type === 'vegetable')
        create(filtered)
    } else if(sort.value === 'user'){
        const filtered = items.filter(word => word.type === 'user')
        create(filtered)
    } else {
        create(items)
    }  
})