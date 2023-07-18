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
            <h3 v-if="card.archetype != null" class="text-center text-warning">
                {{ card.archetype }}
            </h3>
            <h3 class="text-center text-warning" v-else>
                Unknown
            </h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.single-card {
    border: 3px solid white;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>