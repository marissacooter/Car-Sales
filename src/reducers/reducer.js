

export const initalState = [{

}];

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return state.concat(action.payload)
    }
}