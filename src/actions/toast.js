export default (message, action) => {
    return {
        type: 'updateToast',
        payload: {
            message,
            action
        }
    }
}