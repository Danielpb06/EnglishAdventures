import { createRouter, createWebHistory } from 'vue-router';
import InicioComp from './components/InicioComp.vue';
import Opcion1Comp from './components/Opcion1Comp.vue';
import Opcion2Comp from './components/Opcion2Comp.vue';
import Opcion3Comp from './components/Opcion3Comp.vue';

const routes = [ 
    { path: '/', name: 'inicio', component: InicioComp },
    { path: '/opcion1', name: 'opcion1', component: Opcion1Comp },
    { path: '/opcion2', name: 'opcion2', component: Opcion2Comp },
    { path: '/opcion3', name: 'opcion3', component: Opcion3Comp },
]

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes });
export default router;