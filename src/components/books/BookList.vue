<template>
    <div>
        <v-row>
            <v-col cols="12">
                <search-input-field @search="doSearch" />
            </v-col>
        </v-row>

        <v-row
            v-if="!booklist.length"
            justify="center"
        >
            <v-col
                cols="12"
                md="4"
                class="text-center"
            >
                <p class="overline">
                    Digite algo para iniciar a pesquisa. Ou pesquise alguma outra coisa
                </p>
            </v-col>
        </v-row>

        <loading :condition="searchOnGoing">
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
        </loading>
    </div>
</template>

<script>
    import api from '../api/api';
    import Loading from '../feedback/Loading.vue';
    import BookItem from './BookItem.vue';
    import SearchInputField from '../search/SearchInputField.vue';

    export default {
        name: 'BookList',
        components: {
            Loading,
            BookItem,
            SearchInputField,
        },
        mixins: [api],
        data() {
            return {
                booklist: [],
                searchOnGoing: false,
            };
        },
        methods: {
            doSearch(textSearch) {
                if (textSearch) {
                    this.searchOnGoing = true;
                    this.get(`/volumes?q=${textSearch}`)
                        .then((resp) => {
                            this.searchOnGoing = false;
                            this.booklist = resp.data.items;
                        })
                        .catch(() => {
                            this.searchOnGoing = false;
                        });
                } else {
                    this.booklist = [];
                }
            },
        },
    };
</script>

<style>

</style>
