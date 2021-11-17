import axios from 'axios';
const BACKEND_URL = 'https://api.marty.world';


//This is a temporary solution. A more dynamic solution will be available when needed.
const transformIntoProductsObject = (productId) => {
  return [{ productId: productId, quantity: 1 }]
}

//Although the backend can support an array of products, the project manager requested that only one product be purchased at a time.
const purchase = async (productId) => {


  const product = transformIntoProductsObject(productId);

  const { data } = await axios.post(`${BACKEND_URL}/create-checkout-session`, {
    products: product
  });

  location.href = data.url;
}

export default purchase;