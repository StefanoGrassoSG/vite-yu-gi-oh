import { reactive } from 'vue'

export const store = reactive({
    searchText: null,
    loading: true,
    cards: [],
    archetype: []
});