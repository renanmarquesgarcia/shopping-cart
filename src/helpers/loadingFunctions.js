import { createCustomElement } from './shopFunctions';

export const addLoading = () => {
  const productsSection = document.querySelector('.products');
  const loadingElement = createCustomElement('h3', 'loading', 'carregando');
  productsSection.appendChild(loadingElement);
};

export const removeLoading = () => {
  const productsSection = document.querySelector('.products');
  const loadingElement = document.querySelector('.loading');
  productsSection.removeChild(loadingElement);
};
