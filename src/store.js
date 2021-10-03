import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken: '',
        userId: '',
        logged: false,
        message: {
            text: '',
            type: '',
        },
    },
    mutations: {
        setAuthToken(state, payload) {
            window.localStorage.authToken = payload;
            state.authToken = payload;
            state.logged = Boolean(state.authToken);
        },
        setLogged(state, payload) {
            window.localStorage.userId = payload;
            state.logged = payload;
        },
        setUserId(state, payload) {
            state.userId = payload;
        },
        showErrorMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'ERROR',
            };
        },
        showSuccessMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'SUCCESS',
            };
        },
    },
});
