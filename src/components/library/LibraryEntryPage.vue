<template>
    <v-container fluid>
        <back-button />
        <v-row>
            <v-col cols="12">
                <h4 class="display-1">{{ shelf.title }}</h4>
                <span class="overline ml-2">{{ shelf.volumeCount }} livros</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="(book, i) in booklist"
                :key="i"
                cols="12"
                md="3"
                lg="2"
            >
                <book-item :book="book" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../api/api';
    import BackButton from '../navegation/BackButton.vue';
    import BookItem from '../books/BookItem.vue';

    export default {
        name: 'LibraryEntryPage',
        components: {
            BackButton,
            BookItem,
        },
        mixins: [api],
        data() {
            return {
                shelf: {},
                booklist: [],
            };
        },
        created() {
            this.get(`/users/${this.$store.state.userId}/bookshelves/${this.$route.params.id}`)
                .then((resp) => {
                    this.shelf = resp.data;
                });
            this.get(`/users/${this.$store.state.userId}/bookshelves/${this.$route.params.id}/volumes`)
                .then((resp) => {
                    this.booklist = resp.data.items;
                });
        },
    };
</script>

<style>

</style>
