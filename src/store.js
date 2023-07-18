import { reactive } from 'vue'

export const store = reactive({
    searchText: "Select an archetype",
    loading: true,
    cards: [],
    archetype: []
});