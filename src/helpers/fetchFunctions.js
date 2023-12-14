export const fetchProduct = async (productId) => {
  if (!productId) throw new Error('ID não informado');

  const API_URL = 'https://api.mercadolibre.com/items/';
  const response = await fetch(`${API_URL}${productId}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (searchedProduct) => {
  if (!searchedProduct) throw new Error('Termo de busca não informado');

  const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  const response = await fetch(`${API_URL}${searchedProduct}`);
  const { results } = await response.json();
  return results;
};
