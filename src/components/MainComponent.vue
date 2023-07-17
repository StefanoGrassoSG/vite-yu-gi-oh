<script>
export default {
    data() {
        return {

        }
    },
    props: {
        cards: {
            type: Array,
            default: []
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="py-4 row">
                <div class="col-auto">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Alien</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

            <div class="result bg-black px-5 py-3">
                <h3 class="text-white">
                    Found {{ cards.lenght }} cards
                </h3>
            </div>

            <div class="row">
                <div class="col-12 col-sm-6 col-md-5 col-lg-3" v-for="(singleCard, i) in cards" :key="i">
                    <div class="single-card">
                        <div>
                            <img class="img-fluid" :src="singleCard.card_images[0].image_url" alt="">
                        </div>
                        <div>
                            <h2 class="p-3 text-center text-white">
                                {{ singleCard.name }}
                            </h2>
                        </div>
                        <div>
                            <h3 class="text-center">
                                {{ singleCard.archetype }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #D48F38;
}
</style>