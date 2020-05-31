const initState = {
    isOpen: false,
    message : ''
}

export default (state = initState, action) => {
    if (action.type === 'updateToast'){
        let newState = {...state}
        switch (action.payload.action){
            case 'close':
                newState = initState
                break
            case 'show':
                newState.message = action.payload.message
                newState.isOpen = true
                break
            default:
                break
        }
        return newState
    }
    return state
}