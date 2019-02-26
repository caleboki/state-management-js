export default {
    addItem(state, payload) {
        state.items.push(payload);
        localStorage.setItem('items', JSON.stringify(state.items))
        

        return state;
    },
    clearItem(state, payload) {
        state.items.splice(payload.index, 1);
        localStorage.setItem('items', JSON.stringify(state.items))

        return state;
    }
};