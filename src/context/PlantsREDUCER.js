import axios from "axios";

const REDUCER_ACTIONS = {
    add: 'add_to_garden'
}

function PlantsREDUCER(state,action) {
    
    switch (action.type) {
        case REDUCER_ACTIONS.add:
            console.log(state);
            return axios.post('http://localhost:3003/House_Plants2', {
                
            })
    
        default:
            return state
    }

}

export default PlantsREDUCER