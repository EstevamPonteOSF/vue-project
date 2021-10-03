<template>
    <loading :condition="searchOnGoing">
        <v-row>
            <v-col
                v-for="(shelf, i) in shelfList"
                :key="i"
                cols="12"
                md="3"
                lg="2"
            >
                <library-item :shelf="shelf" />
            </v-col>
        </v-row>
    </loading>
</template>

<script>
    import api from '../api/api';
    import Loading from '../feedback/Loading.vue';
    import LibraryItem from './LibraryItem.vue';

    export default {
        name: 'LibraryList',
        components: {
            LibraryItem,
            Loading,
        },
        mixins: [api],
        data() {
            return {
                searchOnGoing: false,
                shelfList: [],
            };
        },
        created() {
            this.searchOnGoing = true;
            this.get(`users/${this.$store.state.userId}/bookshelves`)
                .then((response) => {
                    this.searchOnGoing = false;
                    this.shelfList = response.data.items;
                });
        },
    };
</script>

<style>

</style>
