import { UPDATE_PROVIDERS } from "../actions/actionTypes";
import InitialState from "../initialState";
function Providers(state = InitialState["Providers"], action) {
  switch (action.type) {
    case UPDATE_PROVIDERS:
      return [...action.providers];
    default:
      return [...state];
  }
}
export default Providers;
