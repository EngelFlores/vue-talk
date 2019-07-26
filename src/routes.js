import Login from './components/Login'
import Albums from './components/Albums'
import Artists from './components/Artists'

const routes = [
    { path: '/', component: Login },
    { path: '/albums', component: Albums },
    { path: '/artists', component: Artists }
];

export default routes;