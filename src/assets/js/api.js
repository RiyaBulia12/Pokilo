const baseUrl = 'https://pokeapi.co/api/v2';

export const getPoke = async () => {
   const getResult = await fetch(baseUrl + '/pokemon/?offset=17&limit=16');
   const json = await getResult.json();
   return json.results;
}
