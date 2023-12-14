import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar a funçao fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('fetchProduct com o argumento "MLB1405519561" é uma estrutura de dados igual ao objeto product', async () => {
    const data = await fetchProduct('MLB1405519561');
    expect(data).toEqual(product);
  });

  it('ao chamar a função fetchProduct sem argumento, retorna um erro', () => {
    const errorMesssage = 'ID não informado';
    expect(fetchProduct()).rejects.toThrow(errorMesssage);
  });
});
