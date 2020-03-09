const topics = [
    {id: "0", title: "Grading"},
    {id: "1", title: "Work Load"},
    {id: "2", title: "Instructor"},
    {id: "3", title: "Content"},

]

const widgetReducer = (
    state = {topics: topics}, action) => {
    switch (action.type) {
        case "UPDATE_WIDGET":
            return {
                topics: state.topics.map(topic => topic.id === action.topic.id ? action.topic : topic)
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets
            }
        case "FIND_ALL_TOPICS":
            return {
                topics: [...state.topics]
            }
        default:
            return state
    }
}

export default widgetReducer