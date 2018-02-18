import Login from './components/Login.vue';
import Home from './components/Home.vue';
import ToWork from './components/ToWork.vue';
import Archived from './components/Archived.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import EditProfile from './components/EditProfile.vue';

export default [{
  path: '/login',
  component: Login
}, {
  path: '/',
  component: Home
}, {
  path: '/towork',
  component: ToWork
}, {
  path: '/archived',
  component: Archived
}, {
  path: '/register',
  component: Register
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/profile/edit',
  component: EditProfile
}]

