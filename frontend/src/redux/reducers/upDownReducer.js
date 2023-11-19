const initalState = {}
export const upDownReducer = (state = initalState, action) => {
    if (action.type === 'increment') {
        return { ...state, number: (state?.number) + 1 }
    } else if (action.type === 'decrement') {
        return { ...state, number: (state?.number) - 1 }
    } else {
        return state;
    }
}