export const newNotification = (data) => {
    return {
        type: 'NEW_NOTIFICATION',
        data: {
            ...data
        }
    }
}

export const deleteNotification = (key) => {
    return {
        type: 'DELETE_NOTIFICATION',
        key: key
    }
}

const notificationReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTIFICATION':
            return [
                ...state,
                action.data
            ]
        case 'DELETE_NOTIFICATION':
            return [
                ...state.filter(e => e.key !== action.key)
            ]
        default:
            return state;
    }
}

export default notificationReducer