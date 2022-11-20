// Rick and Morty api

// const r = fetch('https://pokeapi.co/api/v2/pokemon/1');
// console.log('London is the capital');
// console.log(r);

// let country = 'germany'
// function test() {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json()).then(data => console.log(data))
// }
// test();

function getData() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const { results: dataArray } = data;
            // console.log(dataArray)
            const markup = dataArray.map(item => `
                
            <li>
                    <img src=${item.image} alt="">
                    <p>NAME: ${item.name}</p>
                    <p>GENDER: ${item.gender}</p>
                    <p>ID: ${item.id}</p>
                    <p>STATUS: ${item.status}</p>
                    <p>CREATED: ${item.created}</p>
            </li>
            
             `).join('')
            
            document.querySelector('.characterList').innerHTML += markup
    
})
}
getData();
    