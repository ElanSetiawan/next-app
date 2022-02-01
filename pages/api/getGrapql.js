const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        name
      }
    }
  }`;
  

export const getdata = async (limit, ofset) => {
  const respon =  await fetch('https://graphql-pokeapi.graphcdn.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: gqlQuery,
      variables: {
        limit: limit,
        offset: ofset,
      },
    }),
    method: 'POST',
  })
    .then((res) => res.json())
    .then((res) => res);
    return respon;
}

const gqlQuerybyName = `query pokemon($name: String! = "pidgeotto") {
    pokemon(name: $name) {
    id
    name
    sprites {
        front_default
    }
    height,
    weight,
    moves {
        move {
        name
        }
    }
    stats{
        base_stat
        stat{
            name
        }
    }
    
    types {
        type {
        name
        }
    }
    }
  }`;
  

export const getdataByName = async (name) => {
  const respon =  await fetch('https://graphql-pokeapi.graphcdn.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: gqlQuerybyName,
      variables: {
        name: name
      },
    }),
    method: 'POST',
  })
    .then((res) => res.json())
    .then((res) => res);
    return respon;
}