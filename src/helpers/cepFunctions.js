const AWESOME_API = 'https://cep.awesomeapi.com.br/json/';
const BRASIL_API = 'https://brasilapi.com.br/api/cep/v2/';
const addressElement = document.querySelector('.cart__address');

export const getAddress = async (cep) => {
  try {
    const addressInfo = await Promise.any([
      fetch(`${AWESOME_API}${cep}`),
      fetch(`${BRASIL_API}${cep}`),
    ]);

    const data = await addressInfo.json();
    return data;
  } catch (error) {
    addressElement.innerHTML = 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  const cep = document.querySelector('.cep-input').value;
  const addressInfo = await getAddress(cep);

  if (typeof addressInfo === 'object' && 'address' in addressInfo) {
    const { address, district, city, state } = addressInfo;
    addressElement.innerHTML = `${address} - ${district} - ${city} - ${state}`;
  }

  if (typeof addressInfo === 'object' && 'street' in addressInfo) {
    const { street, neighborhood, city, state } = addressInfo;
    addressElement.innerHTML = `${street} - ${neighborhood} - ${city} - ${state}`;
  }
};
