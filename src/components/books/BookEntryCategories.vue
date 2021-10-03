<template>
    <div
        v-if="book.volumeInfo.categories && book.volumeInfo.categories.length"
        class="mt-4"
    >
        <v-subheader>Categoria</v-subheader>
        <v-divider class="mb-2" />
        <v-chip
            v-for="(category, i) in book.volumeInfo.categories"
            :key="i"
        >
            {{ category }}
        </v-chip>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryCategories',
        props: {
            book: { type: Object, required: true },
        },
    };
</script>

<style>

</style>
