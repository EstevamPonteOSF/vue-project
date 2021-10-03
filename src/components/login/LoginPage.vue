<template>
    <v-container>
        <v-row justify="center">
            <v-col
                cols="12"
                md="4"
                lg="3"
                class="text-center"
            >
                <h6
                    class="display-1 text-uppercase"
                >
                    Login
                </h6>

                <v-text-field
                    v-model="token"
                    label="token"
                />

                <v-text-field
                    v-model="userId"
                    label="ID do usuário"
                />

                <v-btn
                    class="mb-3"
                    depressed
                    dark
                    block
                    color="primary"
                    @click="login"
                >
                    Login
                </v-btn>
                <v-btn
                    text
                    color="secondary"
                    @click="loginAsGuest"
                >
                    Entrar como visitante
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                token: 'AIzaSyBEIvDIct4TDU_Q3spsTZ4QpyGWRbPXoUM',
                userId: '101375651644171614609',
            };
        },
        methods: {
            login() {
                if (this.token && this.userId) {
                    this.$store.commit('setAuthToken', this.token);
                    this.$store.commit('setUserId', this.userId);
                    this.$router.push('/book');
                    this.$store.commit('showSuccessMessage', 'Login efetuado');
                } else {
                    this.$store.commit('showErrorMessage', 'Você deve infomar um ID de usuário e um token');
                    // Todo
                }
            },
            loginAsGuest() { // Melhorar mais tarde
                this.$store.commit('setLogged', true);
                this.$router.push('/book');
            },
        },
    };
</script>

<style scoped>

</style>
