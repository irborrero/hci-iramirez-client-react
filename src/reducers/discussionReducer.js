const discussions = {
    adding: -1,
    discussions: [
    {id: "123", title: "I had a great experience!!", topic:"1", user:"Ann"},
    {id: "124", title: "Great class but a lot of work...", topic:"1", user:"Ben"},
    {id: "125", title: "Very useful!!", topic:"3", user:"Jerry"},
    {id: "126", title: "Could have been better organized", topic:"3", user:"Leslie"},
    {id: "127", title: "Very strict grading!", topic:"0", user:"Andy"},
    {id: "128", title: "Very good instructor", topic:"2", user:"April"}]
};

const discussionReducer = (
    state = discussions, action) => {
    switch (action.type) {
        case "UPDATE_DISCUSSIONS":
            return {
                discussions: state.discussions.map(discussion => discussion.topic === action.topicId ? action.discussion : discussion)
            }
        case "DELETE_WIDGET":
            return {
                discussions: state.discussions.filter(discussion => discussion.id !== action.discusionId)
            }
        case "CREATE_DISCUSSION":
            return {
                discussions: [
                    ...state.discussions,
                    action.discussion
                ]
            }
        case "FIND_ALL_DISCUSSIONS_FOR_TOPIC":
            return {
                discussions: state.discussions
            }
        case "ADDING_COMMENT":
            return {
                ...state,
                adding: 0
            }

        default:
            return state
    }
}

export default discussionReducer