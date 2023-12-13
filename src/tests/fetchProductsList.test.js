import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('fetchProductsList com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearc', async () => {
    const data = await fetchProductsList('computador');
    expect(data).toEqual(computadorSearch);
  });

  it('ao chamar a função fetchProductsList sem argumento, retorna um erro', async () => {
    const errorMesssage = 'Termo de busca não informado';
    expect(fetchProductsList()).rejects.toThrow(errorMesssage);
  });
});
