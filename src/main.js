import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { addLoading, removeLoading } from './helpers/loadingFunctions';
import createErrorElement from './helpers/errorFunctions';
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
    const errorElement = createErrorElement();
    productsSection.appendChild(errorElement);
  } finally {
    removeLoading();
  }
};

createProductList();
