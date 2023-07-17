<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        card: {
            type: Object,
            default: {
                archetype:'',
                name:'',
                card_images: ''
            }
        },
    }
    
}

</script>

<template>
   <div class="single-card">
        <div>
            <img :src="card.card_images[0].image_url" class="img-fluid" alt="">
        </div>
        <div>
            <h2 class="p-3 text-center text-white">
                {{ card.name }}
            </h2>
        </div>
        <div>
            <h3 class="text-center">
                {{ card.archetype }}
            </h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>