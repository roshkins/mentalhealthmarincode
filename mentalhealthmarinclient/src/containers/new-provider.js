import { connect } from "react-redux";
import {
  updateNewProviderCommonName,
  updateNewProviderEmail,
  updateNewProviderFormalName,
  updateNewProviderUsageInstructions,
  submitNewProvider
} from "../actions/newProviderActions";
/**/
import NewProvider from "../components/new-provider";

const mapStateToProps = (state, ownProps) => {
  const {
    NewProvider: { commonName, formalName, usageInstructions, email }
  } = state;
  return {
    commonName,
    formalName,
    usageInstructions,
    email
  };
};
const mapDispatchToProps = dispatch => {
  return {
    commonNameChange: e => {
      dispatch(updateNewProviderCommonName(e.target.value));
    },
    emailChange: e => dispatch(updateNewProviderEmail(e.target.value)),
    formalNameChange: e =>
      dispatch(updateNewProviderFormalName(e.target.value)),
    usageInstructionsChange: e =>
      dispatch(updateNewProviderUsageInstructions(e.target.value)),
    addProvider: () => dispatch(submitNewProvider())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewProvider);
