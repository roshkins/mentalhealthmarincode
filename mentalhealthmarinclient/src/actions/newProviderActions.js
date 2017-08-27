import * as ActionTypes from "./actionTypes";
import { LOOPBACK_SERVER } from "../constants/global";
import { checkHttpResponseJson } from "../helpers/errorChecking";
import { getProviders } from "./providers";

export function updateNewProviderCommonName(commonName) {
  return {
    type: ActionTypes.UPDATE_NEW_PROVIDER_COMMON_NAME,
    commonName
  };
}

export function updateNewProviderFormalName(formalName) {
  return {
    type: ActionTypes.UPDATE_NEW_PROVIDER_FORMAL_NAME,
    formalName
  };
}

export function updateNewProviderEmail(providerEmail) {
  return {
    type: ActionTypes.UPDATE_NEW_PROVIDER_EMAIL,
    providerEmail
  };
}

export function updateNewProviderUsageInstructions(providerInstructions) {
  return {
    type: ActionTypes.UPDATE_NEW_PROVIDER_USAGE_INSTRUCTIONS,
    providerInstructions
  };
}

export function beginSubmittingNewProvider() {
  return {
    type: ActionTypes.BEGIN_SUBMITTING_NEW_PROVIDER
  };
}

export function submittedNewProvider() {
  return { type: ActionTypes.SUBMITTED_NEW_PROVIDER };
}

export function submitNewProvider() {
  return (dispatch, getState) => {
    dispatch(beginSubmittingNewProvider());

    const {
      NewProvider: { commonName, formalName, usageInstructions, emailAddress }
    } = getState();

    return fetch(LOOPBACK_SERVER + "providers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formal_name: formalName,
        common_name: commonName,
        phone_number: "string",
        email_address: "string",
        address: "string",
        event_calendar: "string",
        usage_instructions: usageInstructions,
        realm: "string",
        username: commonName,
        email: emailAddress,
        password: "test",
        emailVerified: true
      })
    })
      .then(checkHttpResponseJson)
      .then(() => dispatch(getProviders()))
      .catch(error => {
        throw error;
      });
  };
}
