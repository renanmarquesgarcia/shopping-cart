import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { addLoading, removeLoading } from './helpers/loadingFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const createProductList = async () => {
  const productsSection = document.querySelector('.products');

  addLoading();
  const computers = await fetchProductsList('computador');
  computers.forEach(({ id, title, thumbnail, price }) => {
    const productElement = createProductElement({ id, title, thumbnail, price });
    productsSection.appendChild(productElement);
  });

  removeLoading();
};

createProductList();
