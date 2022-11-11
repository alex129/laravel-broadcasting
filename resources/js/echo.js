import Echo from 'laravel-echo';
import Socket  from 'socket.io-client';
import 'socket.io-client'
export default echo_instance = new Echo({
  broadcaster: 'socket.io',
  host: 'http://127.0.0.1:6001',
//   auth: {
//     headers: {
//       /** I'm using access tokens to access  **/
//       Authorization: 'Bearer ' + Cookies.get('access_token'),
//     },
//   },
});