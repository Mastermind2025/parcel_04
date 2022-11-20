// button&scroll Rick and Morty api

// let character = { "id": 21...}
// console.log('Very well!');
const getEl = (x) => document.querySelector(x) // querySelector like Arrow function
let counter = 1;

function getDataForButton() {
    fetch(`https://rickandmortyapi.com/api/character?page=${counter}`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(data => {
            console.log(data);
            const markup = data.results.map(item => `

        <li class="item">
                <img src=${item.image} alt="">
                <p>NAME: ${item.name}</p>
                <p>gender: ${item.gender}</p>
                <p>status: ${item.status}</p>
                <p>Created: ${item.created}</p>
                <p>ID: ${item.id}</p>
        </li>   
              
      `).join('')
            getEl('.itemList').innerHTML += markup
            // document.querySelector('.itemList').innerHTML +=
            
            counter ++
            // counter += 1
            
        })
    
}
getDataForButton()
// Добавляем слушатель на кнопку. Click по кнопке добавляет персонажей. Смотрим ID на карточке
// getEl('button').addEventListener('click', getDataForButton);

//Непрерывный скрол
window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    // console.log(scrollHeight)   //высота документа
    // console.log(scrollTop)          //колво пикселей от верха
    // console.log(clientHeight)          //высота вьюпорта

    if (scrollHeight - clientHeight === scrollTop) {
        getDataForButton()
    }
})