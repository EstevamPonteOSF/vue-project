<template>
    <div>
        <h4 class="display-1">{{ book.volumeInfo.title }}</h4>
        <h4 class="headline">{{ book.volumeInfo.subtitle || 'Sem descrição' }}</h4>

        <p>{{ book.volumeInfo.description }}</p>
        <!-- <p v-html="book.volumeInfo.description" /> -->
    </div>
</template>

<script>
    export default {
        name: 'BookEntryData',
        props: {
            book: { type: Object, required: true },
        },
    };
</script>

<style>

</style>
