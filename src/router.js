import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '/todo-list',
        name: "TodoList",
        component: () => import('./views/TodoList.vue')
    },
    {
        path: '/game',
        name: "TicTacToe",
        component: () => import('./views/TicTacToe.vue')
    },
    {
        path: "/about",
        name: "About",
        component: About,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
