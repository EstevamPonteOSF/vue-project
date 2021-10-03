<template>
    <div>
        <div v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.medium">
            <img
                :src="book.volumeInfo.imageLinks.medium"
                :alt="book.volumeInfo.title"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryImage',
        props: {
            book: { type: Object, required: true },
        },
    };
</script>

<style>

</style>
