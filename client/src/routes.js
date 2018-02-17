import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';

export default [{
  path: '/login',
  component: Login
}, {
  path: '/',
  component: Home
},{
  path: '/register',
  component: Register
}]

