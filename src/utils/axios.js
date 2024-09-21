import axios from 'axios';


// const serviceToken = window.localStorage.getItem('serviceToken')
const axiosServices = axios.create({
  //baseURL: 'http://192.168.1.212:8081/tcasapi/', // Replace with your server URL
  baseURL: 'http://103.127.143.155:8081/tcasapi/', //prod    
});

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //
// if(serviceToken){
// axiosServices.defaults.headers.common['Authorization'] = `Bearer ${serviceToken}`;
// }
axiosServices.interceptors.response.use(
  (response) => response,
  (error) =>{
    console.log('Axios Error',error)
return Promise.reject((error.response && error.response.data) || 'Wrong Services')
  } 
);

export default axiosServices;
