import axios from 'axios'
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface'

export class Pokemon {
/*  
  public id: number;
  public name: string */

  constructor( 
      public readonly id: number, 
      public name: string,
/*       public imageURL: string */
    ) {
/*     
this.id = id;
    this.name = name; */
  }

  get imageURL(): string {
    return `https://pokemon.com/${this.id}.jpg`
  }

  scream(){
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak(){
    console.log(this.name + ' , ' + this.name)
  }

  async getMoves(): Promise<Move[]> {
    const {
      data
    } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
    data.moves.forEach((element: any) => {
      console.log(element)
    });
    console.log(data.moves[0].move.name.toUpperCase())

    return data.moves
  }

}

export const charmander = new Pokemon(1,'Charmander')

/* console.log(charmander.getMoves()) */
charmander.getMoves()
/**
 * clase 10
 */

/* 
charmander.id = 10; */
/* charmander.name = 'Mew'
console.log(charmander.imageURL)
charmander.scream()
charmander.speak() */