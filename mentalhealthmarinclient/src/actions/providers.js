import * as ActionTypes from "./actionTypes";
import * as globals from "../constants/global";
import { checkHttpResponseJson } from "../helpers/errorChecking";

export function getProviders() {
  return dispatch => {
    fetch(globals.LOOPBACK_SERVER + "providers")
      .then(checkHttpResponseJson)
      .then(response => {
        console.log(response);
        dispatch(updateProviders(response));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateProviders(providers) {
  return {
    type: ActionTypes.UPDATE_PROVIDERS,
    providers
  };
}

export function beginDeleting() {
  return { type: ActionTypes.BEGIN_DELETE_PROVIDER };
}

export function providerDeleted() {
  return { type: ActionTypes.DELETE_PROVIDER };
}

export function loadProviders() {
  return dispatch => dispatch(getProviders());
}

export function deleteProvider(providerId) {
  return dispatch => {
    dispatch(beginDeleting());
    return fetch(globals.LOOPBACK_SERVER + "providers/" + providerId, {
      method: "DELETE"
    })
      .then(checkHttpResponseJson)
      .then(jsonResponse => {
        dispatch(getProviders());
      })
      .catch(error => {
        throw error;
      });
  };
}
