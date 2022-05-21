import Home from './views/Home.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';
import SearchResults from './views/SearchResults.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import SearchPage from './views/SearchPage.vue';
import FanficReader from './views/FanficReader.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Welcome, Tony!' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/:path(.*)', component: NotFound },
  { path: '/search/:path(.*)', component: SearchResults },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/search', component: SearchPage, meta: { title: 'Search' } },
  { path: '/reader', component: FanficReader },
];
