import axios from './index';

export function getProducts(productId = false) {

    const headers = {
      
    };
    let route = '/search';
    if(productId){
        route = route+'/'+productId;
    }
    return axios.get(route, { headers })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        throw new Error(error);
    });
}