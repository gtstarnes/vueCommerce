<script lang="ts" setup>
    import { count,minus, add } from './CartCounterInterface';
</script>

<template>
    <div>
        <button @click="minus">-</button>
        <span>{{ count }}</span>
        <button @click="add">+</button>
    </div>
</template>

<style lang="css" scoped></style>