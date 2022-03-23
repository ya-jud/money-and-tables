import { createWebHashHistory, createRouter } from 'vue-router';
import Textarea from '../components/Textarea.vue'
import TableResult from '../components/TableResult.vue'

const routes = [
    {
        path: "/Textarea",
        name: "Textarea",
        component: Textarea
    },
    {
        path: "/TableResult",
        name: "Tableresult",
        component: TableResult
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});