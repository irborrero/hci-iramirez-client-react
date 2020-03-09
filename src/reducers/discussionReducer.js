const discussions = [
    {id: "123", title: "I had a great experience!!", topic:"1", user:"Ann"},
    {id: "124", title: "Great class but a lot of work...", topic:"1", user:"Ben"},
    {id: "125", title: "Very useful!!", topic:"3", user:"Jerry"},
    {id: "126", title: "Could have been better organized", topic:"3", user:"Leslie"},
    {id: "127", title: "Very strict grading!", topic:"0", user:"Andy"},
    {id: "128", title: "Very good instructor", topic:"2", user:"April"},
]

const discussionReducer = (
    state = {discussions: discussions}, action) => {
    switch (action.type) {
        case "UPDATE_WIDGET":
            return {
                discussions: state.discussions.map(discussion => discussion.id === action.discussion.id ? action.discussion : discussion)
            }
        case "DELETE_WIDGET":
            return {
                discussions: state.discussions.filter(discussion => discussion.id !== action.discusionId)
            }
        case "CREATE_WIDGET":
            return {
                discussions: [
                    ...state.discussions,
                    action.discussion
                ]
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                discussions: action.discussions
            }
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default discussionReducer