const baseUrl = 'https://pokeapi.co/api/v2';

export const getPoke = async () => {
  const getResult = await fetch(`${baseUrl}/pokemon/?offset=1&limit=9`);
  const json = await getResult.json();
  return json.results;
};

// export const getPokeDetails = async (id) =>  {
//    const getDetails = await fetch(baseUrl + '/pokemon/${id}')
//    const jsonDetails = await getResult.json();
//    return jsonDetails.results;
// }
