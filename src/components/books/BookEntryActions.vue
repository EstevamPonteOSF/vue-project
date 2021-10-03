<template>
    <div
        v-if="book.volumeInfo.previewLink"
        class="mt-4"
    >
        <v-subheader>Ações</v-subheader>
        <v-divider class="mb-2" />

        <v-btn
            text
            color="primary"
            @click="goToPreview(book)"
        >
            Ver Preview
        </v-btn>
    </div>
</template>

<script>
    import bookService from './bookService';

    export default {
        name: 'BookEntryActions',
        mixins: [
            bookService,
        ],
        props: {
            book: { type: Object, required: true },
        },
    };
</script>

<style>

</style>
