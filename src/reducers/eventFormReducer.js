const dateNow = new Date(Date.now())

const initData = 
    {
    name: "",
    surname: "",
    email: "",
    date: `${dateNow.getFullYear()}-${("0" + (dateNow.getMonth() + 1)).slice(-2)}-${("0" + dateNow.getDate()).slice(-2)}`,
    validated: false
}
export default (state = initData, action) => {
    if (action.type === 'updateEventForm') {
        let newState = {...state}
        switch (action.payload.item) {
            case 'name':
                newState.name = action.payload.data
                break
            case 'surname':
                newState.surname = action.payload.data
                break
            case 'email':
                newState.email = action.payload.data
                break
            case 'date':
                newState.date = action.payload.data
                break
            case 'validated':
                newState.validated = action.payload.data
                break
            case 'clearForm':
                newState = initData
            default:
                break
        }
        return newState

    }
    return state


}