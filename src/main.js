import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import {
  createCartProductElement,
  createCustomElement,
  createProductElement,
} from './helpers/shopFunctions';
import { addLoading, removeLoading } from './helpers/loadingFunctions';
import './style.css';
import { saveCartID } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const addProductToCart = async (productId) => {
  const cartElement = document.querySelector('.cart__products');
  saveCartID(productId);
  const productInfo = await fetchProduct(productId);
  const productCartElement = createCartProductElement(productInfo);
  cartElement.appendChild(productCartElement);
};

const createProductList = async () => {
  const productsSection = document.querySelector('.products');

  try {
    addLoading();

    const computers = await fetchProductsList('computador');
    computers.forEach(({ id, title, thumbnail, price }) => {
      const productElement = createProductElement({ id, title, thumbnail, price });
      productsSection.appendChild(productElement);

      productElement.addEventListener('click', () => addProductToCart(id));
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
