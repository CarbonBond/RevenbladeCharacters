import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

  const response = await fetch('https://api.revenbladeheroes.com/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query findCharacters {
            characters {
            name
          }
        }`,
    }),
  })
  let res = await response.json()

  if (res) {
    return {
      characters: res.data.characters,
    }
  }

  throw error(404, 'Not found')
}
