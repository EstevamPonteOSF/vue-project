<template>
    <v-container fluid>
        <back-button />
        <v-row v-if="book && book.volumeInfo">
            <v-col
                cols="12"
                md="4"
                class="text-center"
            >
                <book-entry-image :book="book" />
            </v-col>

            <v-col
                cols="12"
                md="8"
            >
                <book-entry-data :book="book" />
                <book-entry-authors :book="book" />
                <book-entry-categories :book="book" />
                <book-entry-actions :book="book" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../api/api';
    import bookService from './bookService';
    import BookEntryImage from './BookEntryImage.vue';
    import BookEntryData from './BookEntryData.vue';
    import BookEntryCategories from './BookEntryCategories.vue';
    import BookEntryAuthors from './BookEntryAuthors.vue';
    import BookEntryActions from './BookEntryActions.vue';
    import BackButton from '../navegation/BackButton.vue';

    export default {
        name: 'BookEntryPage',
        components: {
            BackButton,
            BookEntryImage,
            BookEntryData,
            BookEntryCategories,
            BookEntryAuthors,
            BookEntryActions,
        },
        mixins: [
            bookService,
            api,
        ],
        data() {
            return {
                book: {},
            };
        },
        created() {
            this.get(`/volumes/${this.$route.params.id}`)
                .then((resp) => {
                    this.book = resp.data;
                });
        },
    };
</script>

<style>

</style>
