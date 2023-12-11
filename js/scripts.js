// Create a repository variable to copy the pokemonList array (housed in an IIFE)
// Holding array in an IIFE protects it from unintended side effects
// funtions add and getAll will be in return to allow intentional access
let pokemonRepository = (function () {
  // Create a pokemonList array variable, housed in an IIFE to keep it unaccessable
  let pokemonList = [
    // {Name: 'Bulbasaur', height: 0.7, type: ['grass', ' poison']}, 
    // {Name: 'Charmander', height: 0.6, type: ['fire']},
    // {Name: 'Blastoise', height: 1.6, type: ['water']}
    ];

    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // Local function that adds a pokemon object to the array variable pokemonList
  function add(pokemon) {
      pokemonList.push(pokemon);
    }

  // Local function that returns the pokemonList array variable
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    /* Creates a variable pokePageList (node) that is assigned to the <ul></ul> tag 
    in our index.HTML file with class name .pokemon-list */
    let pokePageList = document.querySelector('.pokemon-list');

    // Creates a list item variable (node) for our <li></li> tag in index.HTML
    let listItem = document.createElement('li');

    // Creates a button variable (node) for our <button></button> tag in index.HTML
    let button = document.createElement('button');
    // Sets the button text to the pokemon's name
    button.innerText = pokemon.name;
    // Adds the class list-button to button for CSS styling access
    button.classList.add('list-button');

    // Add event listener for when the user clicks on a pokelist button
    // Calls the showDetails function as it's event handler getting passed the pokemon object
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });

    /* Append the button node to listItem, and listItem to pokePageList both 
    as their children */
    listItem.appendChild(button);
    pokePageList.appendChild(listItem)
  }
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            // imageUrl: "",
          };

          // console.log(pokemon);
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function loadDetails(item) {
    let url = item.detailsUrl;

    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Return statement, allowing you to call add and getAll local functions
  // This allows global access to pokemonList that is otherwise impossible
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    showDetails: showDetails
  };
})();

// pokemonRepository.getAll() calls getAll function in IIFE to copy pokemonList onto pokemonRepository
// .forEach iterates through pokemonRepository and executes .addListItem function for each index
// Function printPokemon passed parameter pokemon, which is an object at each index of pokemonRepository
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});