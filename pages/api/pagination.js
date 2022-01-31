export const getDataPagination = async(url) => {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    if(url){
         res = await fetch(url)
    }
  let list = [];
  const resp = await res.json()
  const pokemon = resp.results.map((e) => { 
    const u = e['url'].split('/');
    const url = `${u[u.length-2]}`;
    list.push(url)
    return { "name": e["name"], "url": url } 
  })
  let r = [];
  for (const a in list) {
      const res_ = await fetch(`https://pokeapi.co/api/v2/pokemon/${list[a]}`)
      const r_ = await res_.json()
      r.push({'img': r_.sprites.other})
  }
  return { resp, pokemon,r }
}