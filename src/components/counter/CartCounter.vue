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

<style lang="css" scoped>
    div {

        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: lightgrey;
        padding: 0.5em;
        border-radius: 4px;

        button {
            color: orangered;
            background-color: inherit;
            border: none;
            cursor: pointer;
        }
        span {
            font-weight: bold;
        }
    }
    

    
</style>