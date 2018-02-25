import Login from './components/Login.vue';
import Home from './components/Home.vue';
import ToWork from './components/ToWork.vue';
import Archived from './components/Archived.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import EditProfile from './components/EditProfile.vue';

export default [{
  path: '/login',
  component: Login,
  name: 'login'
}, {
  path: '/',
  component: Home,
  name: 'home'
}, {
  path: '/towork',
  component: ToWork,
  name: 'towork'
}, {
  path: '/archived',
  component: Archived,
  name: 'archived'
}, {
  path: '/register',
  component: Register,
  name: 'register'
}, {
  path: '/profile',
  component: Profile,
  name: 'profile'
}, {
  path: '/profile/edit',
  component: EditProfile,
  name: 'editprofile'
}]

