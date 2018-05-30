// import _ from "lodash";
import { FETCH_COLORS } from "../actions/types";

export default function(state = [], action) {

    switch (action.type) {
        case FETCH_COLORS:
            return [action.payload.data];
        default:
            return state;
    }
}