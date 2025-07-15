<script lang="ts" setup>
    import { ref } from 'vue';
    const count = ref(0);

    function add(){
        count.value++
    }
    function minus(){
        if (count.value !== 0) {
            count.value--
        }
    }
</script>

<template>
    <div>
        <button @click="minus">-</button>
        <span>{{ count }}</span>
        <button @click="add">+</button>
    </div>
</template>

<style lang="css" scoped></style>