import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const response = await fetch('http://localhost:8080/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query findCharacters {
            characterName(name: "${params.character}") { 
             health   
             power
             movement_speed
             lore
             passive {
               name
               description
               data
             }
             primary {
               name
               description
               data
             }
             secondary {
               name
               description
               data
             } 
             mobility {
               name
               description
               data
             }
             heavy {
               name
               description
               data
             }
             defensive {
               name
               description
               data
             }
           }
          }
        `,
    }),
  })
  let res = await response.json()
  if (res) {
    return {
      name: params.character,
      character: res.data.characterName,
    }
  }

  throw error(404, 'Not found')
}
