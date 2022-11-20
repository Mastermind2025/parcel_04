// Pokemons 
// not working code

import pokemonCardTpl from '../templates/pokemon-card.hbs';

const refs = {
    cardContainer: document.querySelector('.js-card-container'),
};

fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => {
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon);
        const markup = pokemonCardTpl(pokemon);
        refs.cardContainer.innerHTML = markup;
        console.log(markup);
    })
    .catch (error => {
        console.log(error);
    });


// const r = fetch('https://pokeapi.co/api/v2/pokemon/1');
// console.log('I like JS');
// console.log(r);

// Деструктуризация объектов
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(message);