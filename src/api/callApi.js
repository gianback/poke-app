export const searchPokemon = async (pokemon) => {
  //por el nombre o id
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {}
};

//la primera llamada del api
export const getPokemons = async (offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;

    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {}
};

export const getPokemonData = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {}
};

export const getTypes = async (type = "") => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await resp.json();
    return data;
  } catch (error) {}
};
