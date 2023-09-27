let pokemonList = [
    {Name: 'Bulbasaur', height: 0.7, type: ['grass', ' poison']}, 
    {Name: 'Charmander', height: 0.6, type: ['fire']},
    {Name: 'Blastoise', height: 1.6, type: ['water']}
]

pokemonList.forEach(function(pokemon) {
    document.write(pokemon.Name + ' (height: ' + pokemon.height + ')'+ ' (type: ' + pokemon.type + ')');
    document.write('<br>');
})

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1.0){ //if pokemon's height is over 100cm also print 'Wow that's big
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' m) - Wow, that\'s big!<br>');
    }else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' m)<br>');
    }
}