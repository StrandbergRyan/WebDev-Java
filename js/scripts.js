let pokemonRepository = (function () {
    let pokemonArray = [
    {Name: 'Bulbasaur', height: 0.7, type: ['grass', ' poison']}, 
    {Name: 'Charmander', height: 0.6, type: ['fire']},
    {Name: 'Blastoise', height: 1.6, type: ['water']}
    ];

function getAll() {
    return pokemonArray;
}

function add(pokemon) {
    if (typeof pokemon === 'object'){
    repository.push(pokemon);
    }
}

function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.Name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function() {
        showDetails(pokemon.name);
    });
}

function showDetails(pokemon){
    console.log(pokemon) ;
}

return {
    getAll: getAll,
    add: add,
    showDetails: showDetails,
    addListItem: addListItem,
};
})();
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
}); 