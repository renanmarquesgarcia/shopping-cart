export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (searchedProduct) => {
  if (!searchedProduct) throw new Error('Termo de busca não informado');

  const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const response = await fetch(`${API_URL}${searchedProduct}`);
  const { results } = await response.json();
  return results;
};
