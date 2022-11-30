const ACTIONS = {
    add: "add_plant",
    update: "update_plant",
    delete: "delete_plant"
}

function gardenReducer(state,action) {
switch (action.type) {
    case ACTIONS.add:
        
        return {
            ...state,
        }

    default:
        break;
}
}

export default gardenReducer