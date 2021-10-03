<template>
    <v-card class="book-card mx-auto">
        <v-card-title>
            <span>
                {{ shelf.title }}
            </span>
            <v-card-text>
                <span>
                    Número de livros:
                    <span class="font-weight-medium ml-1">{{ shelf.volumeCount }}</span>
                </span>
            </v-card-text>
            <v-card-actions>
                <forward-navigation-button :url="entryPageUrl" />
            </v-card-actions>
        </v-card-title>
    </v-card>
</template>

<script>
    import ForwardNavigationButton from '../navegation/ForwardNavigationButton.vue';

    export default {
        name: 'LibraryItem',
        components: {
            ForwardNavigationButton,
        },
        props: {
            shelf: { type: Object, required: true },
        },
        computed: {
            entryPageUrl() {
                return `/library/${this.shelf.id}`;
            },
        },
    };
</script>

<style>

</style>
