import {API_URL,STRAPI_API_TOKEN} from './urls'

 export const  fetchData = async (endpoint)=>{
    const options = {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + STRAPI_API_TOKEN
        },
    };


    const res = await fetch(`${API_URL}${endpoint}`,options);
    const data = res.json();
    return data;

}


export const makePaymentRequest = async (endpoint,payload)=>{
  const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + STRAPI_API_TOKEN , "Content-Type" : "application/json"
    },
    body: JSON.stringify(payload)
};
  const res = await fetch(`${API_URL}${endpoint}`,options)
  const data = await res.json();
  return data;
}