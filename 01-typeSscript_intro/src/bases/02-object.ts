export const pokemonsIds = [1, 20, 40, 50, 85]

/* pokemonsIds.push('hola') */

console.log(pokemonsIds)


export interface Pokemon{
  id: number;
  name: string;
  age?: number
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',/* 
  age: 25 */
}

export const chamander: Pokemon = {
  id: 1,
  name: 'Chamander', 
  age: 25 
}

console.log(bulbasaur)

export const pokemons: Pokemon[] = []; 

pokemons.push(bulbasaur, chamander)