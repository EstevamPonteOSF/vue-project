<template>
    <v-snackbar
        v-model="showMessage"
        multi-line
        :color="color"
    >
        {{ message }}

        <template v-slot:action="{ attrs }">
            <v-btn
                text
                v-bind="attrs"
                @click="showMessage = false"
            >
                Fechar
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    export default {
        name: 'FeedBack',
        props: {
        },
        data() {
            return {
                message: '',
                color: '',
                showMessage: false,
            };
        },
        watch: {
            '$store.state.message.text': 'setMessage',
        },
        methods: {
            setMessage() {
                this.message = this.$store.state.message.text;
                this.color = this.$store.state.message.type === 'ERROR' ? 'error' : 'success';
                this.showMessage = true;
            },
        },
    };
</script>

<style>

</style>
