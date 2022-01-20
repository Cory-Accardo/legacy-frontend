import axios from 'axios';
const BACKEND_URL = 'https://api.marty.world';



const purchase = async (productMapArray) => {


  const { data } = await axios.post(`${BACKEND_URL}/create-checkout-session`, {
    products: productMapArray
  });

  location.href = data.url;
}

export default purchase;