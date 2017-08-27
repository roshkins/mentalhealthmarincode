import {
  UPDATE_NEW_PROVIDER_COMMON_NAME,
  UPDATE_NEW_PROVIDER_FORMAL_NAME,
  UPDATE_NEW_PROVIDER_EMAIL,
  UPDATE_NEW_PROVIDER_USAGE_INSTRUCTIONS
} from "../actions/actionTypes";
import InitialState from "../initialState";
function NewProvider(state = InitialState["NewProvider"], action) {
  switch (action.type) {
    case UPDATE_NEW_PROVIDER_COMMON_NAME:
      return { ...state, commonName: action.commonName };
    case UPDATE_NEW_PROVIDER_FORMAL_NAME:
      return { ...state, formalName: action.formalName };
    case UPDATE_NEW_PROVIDER_EMAIL:
      return { ...state, email: action.email };
    case UPDATE_NEW_PROVIDER_USAGE_INSTRUCTIONS:
      return { ...state, usageInstructions: action.providerInstructions };
    default:
      return { ...state };
  }
}
export default NewProvider;
