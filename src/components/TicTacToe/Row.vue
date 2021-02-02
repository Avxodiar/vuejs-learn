<template>
    <tr>
        <Cell
            :key="idx"
            v-for="(td, idx) in row"
            :td="td" :id="idx"
            @click-cell="clickRow"
        />
    </tr>
</template>

<script>
    import Cell from '@/components/TicTacToe/Cell.vue'

    export default {
        name: "Row",
        props: ['row', 'rowId'],
        components: {
            Cell
        },
        methods: {
            clickRow(id) {
                this.$emit('click-row', this.rowId, id);
            }
        }
    }
</script>
