import { COLOR_SELECTED } from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case COLOR_SELECTED:
            return action.payload;
        default:
            return state;
    }
}