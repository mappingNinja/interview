export const incremenet = () => (dispatch) => {
    dispatch({
        type: "increment"
    })
}

export const decremenet = () => (dispatch) => {
    dispatch({
        type: "decrement"
    })
}