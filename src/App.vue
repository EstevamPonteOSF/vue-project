<template>
    <v-app>
        <app-header />
        <v-main>
            <router-view />
        </v-main>
        <feed-back />
    </v-app>
</template>

<script>
    import apiConfig from './components/api/apiConfig';
    import FeedBack from './components/feedback/FeedBack.vue';
    import AppHeader from './components/header/AppHeader.vue';

    export default {
        name: 'App',
        components: {
            FeedBack,
            AppHeader,
        },
        mixins: [apiConfig],
        created() {
            this.createInterceptors();
            if (window.localStorage.authToken && window.localStorage.userId) {
                this.$store.commit('setAuthToken', window.localStorage.authToken);
                this.$store.commit('setUserId', window.localStorage.userId);
            } else {
                this.$router.push('/');
            }
        },
    };
</script>
