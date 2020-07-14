let color={
}
let initialState = color ? {color} :{}

export function colorReducers(state:{color:{}}|{}=initialState,action) {
    switch (action.type) {
        default:
            return state
    }
}