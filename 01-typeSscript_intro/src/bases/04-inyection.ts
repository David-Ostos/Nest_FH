import {
  Move,
  PokeAPIResponse,
} from "../interfaces/pokeapi-response.interface";

import { HttpAdapter, PokeApiAdapter, pokeApiFetchAdapter } from "../api/pokeApi.adapter";


export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // Todo: inyectar dependencias
    private readonly http: HttpAdapter
  ) {}

  scream() { console.log(`${this.name.toUpperCase()}!!!`); }

  speak() { console.log(`${this.name}, ${this.name}`); }

  async getMoves(): Promise<Move[]> {
    /*         const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4'); */
    const data = await this.http.get<PokeAPIResponse>("https://pokeapi.co/api/v2/pokemon/4");
    console.log(data.moves[10].move.name);

    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new pokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApiFetch);
export const bulbasaur = new Pokemon(4, "Bulbasaur", pokeApiAxios);

charmander.getMoves();
bulbasaur.getMoves();