!function(){var n=1;function t(){fetch("https://rickandmortyapi.com/api/character?page=".concat(n)).then((function(n){return n.json()})).then((function(t){console.log(t);var c,e=t.results.map((function(n){return'\n\n        <li class="item">\n                <img src='.concat(n.image,' alt="">\n                <p>NAME: ').concat(n.name,"</p>\n                <p>gender: ").concat(n.gender,"</p>\n                <p>status: ").concat(n.status,"</p>\n                <p>Created: ").concat(n.created,"</p>\n                <p>ID: ").concat(n.id,"</p>\n        </li>   \n              \n      ")})).join("");(c=".itemList",document.querySelector(c)).innerHTML+=e,n++}))}t(),window.addEventListener("scroll",(function(){var n=document.documentElement,c=n.scrollHeight,e=n.scrollTop;c-n.clientHeight===e&&t()}))}();
//# sourceMappingURL=scrollRick_and_Morty.5cd62f3e.js.map
