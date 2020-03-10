const initialState = {
    editingBriefDescription: false
}

const instructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_BRIEF_DESCRIPTION":
            return {
                editingBriefDescription: true
            }
        case "SAVE_BRIEF_DESCRIPTION":
            return {
                editingBriefDescription: false
            }

        default:
            return state
        }
}

export default instructorReducer