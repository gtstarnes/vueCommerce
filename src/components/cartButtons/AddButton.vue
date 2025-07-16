<script lang="ts" setup>
    import CartSvg from "../../assets/CartSvg.vue"
</script>

<template>
    <button>
        <CartSvg />
        Add to cart
    </button>
</template>


<style lang="css" scoped>
    button {
        background-color: orangered;
        font-weight: bold;
        cursor: pointer;
        border: none;
        padding: 0.6em;
        width: 100%;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
    }
</style>