import React from 'react'

interface Pokemons { 
    name: string;
    url: string;
}
const Main =async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const p = await res.json();
    const x: Pokemons[] = p.results;
  return (
      <div>
          {x.map(e => 
              <li>
              {e.name}
              </li>
            )}

    </div>
  )
}

export default Main