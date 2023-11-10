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
    button.addEventListener('click', () => {
        showDetails(pokemon.name);
    });
    listItem.classList.add("list-group-item");
    button.classList.remove("button-class");
    button.classList.add("btn btn-outline-info");
  }
}

function showDetails(pokemon){
    console.log(pokemon) ;
}

let button = document.querySelector('button');
button.addEventListener('click', function (event) {
  console.log(event);
});

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

 Add?  function loadList() {
    return fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
          imageUrl: item.myImage,
        };
        add(pokemon);
      });
    })
    .catch(function (e) {
      console.error(e);
    });
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

function add(pokemon) {
  pokemonList.push(pokemon);
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

return {
  getAll: function () {
    return pokemonList;
  },
  add,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
};
})();

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // Do something manually, for example, add custom validations
  form.submit();
});

pokemonRepository.loadList().then(function () {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
}); 