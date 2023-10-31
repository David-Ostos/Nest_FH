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

  getMoves() {
    return 10
  }

}

export const charmander = new Pokemon(1,'Charmander')




/* 
charmander.id = 10; */
/* charmander.name = 'Mew'
console.log(charmander.imageURL)
charmander.scream()
charmander.speak() */