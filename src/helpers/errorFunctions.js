const createErrorElement = () => {
  const errorElement = document.createElement('h3');
  errorElement.classList.add('error');
  errorElement.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  return errorElement;
};

export default createErrorElement;
