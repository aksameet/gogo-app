import { combineReducers } from "redux";
import ColorsReducer from "./reducer_colors";
import SelectedColorReducer from "./reducer_selected_color";

const rootReducer = combineReducers({
  colors: ColorsReducer,
  selectedColor: SelectedColorReducer
});

export default rootReducer;