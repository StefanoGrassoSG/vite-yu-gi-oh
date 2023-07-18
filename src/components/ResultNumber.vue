<script>
import {store} from '../store'

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="result bg-black px-5 py-3">
        <h3 class="text-white">
            Found {{ store.cards.length }} cards
        </h3>
    </div>
</template>

<style lang="scss" scoped>
</style>