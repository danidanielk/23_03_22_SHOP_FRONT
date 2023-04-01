// import axios from 'axios';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

// axios.interceptors.request.use(
//   config => {
//     const token = cookies.get('accessTK');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     } else {
//       return axios.get('http://localhost:8080/manaager/gettoken')
//         .then(response => {
//           const token = response.data.accessTK;
//           cookies.set('accessTK', token, {
//             maxAge: 60 * 10 * 1000,
//             path: '/',
//           });
//           config.headers['Authorization'] = `Bearer ${token}`;
//           return Promise.resolve(config);
//         })
//         .catch(error => {
//           return Promise.reject(error);
//         });
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// export default axios;