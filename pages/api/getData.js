export const getDataAll = async() => {
    const opts = {
        method: 'GET',
      };
    try {
       const res =  await fetch('https://pokeapi.co/api/v2/pokemon/', opts).then(function (response) {
            return response.json();
        })
        .then(function (body) {
            return body
        });
        return res;
    } catch (error) {
        return error    
    } 
}

export const getDataById = async(id) => {
    const opts = {
        method: 'GET',
      };
    try {
       const res =  await fetch('https://pokeapi.co/api/v2/pokemon/'+id, opts).then(function (response) {
            return response.json();
        })
        .then(function (body) {
            return body
        });
        return res;
    } catch (error) {
        return error    
    } 
}
export const getDataMoveById = async(id) => {
    const opts = {
        method: 'GET',
      };
    try {
       const res =  await fetch('https://pokeapi.co/api/v2/move/'+id, opts).then(function (response) {
            return response.json();
        })
        .then(function (body) {
            return body
        });
        return res;
    } catch (error) {
        return error    
    } 
}