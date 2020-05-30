export default (data, item) => {
    return {
        type: 'updateEventForm',
        payload: {
            data,
            item
        }
    }
}