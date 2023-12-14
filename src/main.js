import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createCustomElement, createProductElement } from './helpers/shopFunctions';
import { addLoading, removeLoading } from './helpers/loadingFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const createProductList = async () => {
  const productsSection = document.querySelector('.products');

  try {
    addLoading();
    const computers = await fetchProductsList('computador');
    computers.forEach(({ id, title, thumbnail, price }) => {
      const productElement = createProductElement({ id, title, thumbnail, price });
      productsSection.appendChild(productElement);
    });
  } catch (error) {
    const errorElement = createCustomElement(
      'h3',
      'error',
      'Algum erro ocorreu, recarregue a página e tente novamente',
    );
    productsSection.appendChild(errorElement);
  } finally {
    removeLoading();
  }
};

createProductList();
