import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import { charmander } from './bases/04-inyection.ts'

/* 
import { bulbasaur, pokemonsIds , pokemons } from './bases/02-object.ts'
import { charmander } from './bases/03-classes.ts' */
/*
 pokemons.forEach(key => {
  console.log(key)
})

console.log(charmander) */

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>${charmander.name + ' ' +  charmander.id}</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
