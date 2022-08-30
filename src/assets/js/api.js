const baseUrl = 'https://pokeapi.co/api/v2';

const getPoke = async () => {
  const getResult = await fetch(`${baseUrl}/pokemon/?offset=20&limit=9`);
  const json = await getResult.json();
  return json.results;
};

export default { getPoke };
