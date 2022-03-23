import { createStore } from 'vuex';
import sendData from './api/sendData';

export default createStore({
    state: {
        counter: 0,
    },
    mutations: {
        setCounter(state, i) {
            state.counter += i
        }
    },
    actions: {
        sendJSON() {
            sendData()
        },
    }
});