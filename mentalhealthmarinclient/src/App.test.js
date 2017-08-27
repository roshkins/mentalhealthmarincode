import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App from "./App";

//Redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppReducer from "./reducers/app";

//https://github.com/facebookincubator/create-react-app/issues/967#issuecomment-256358738
beforeEach(function() {
  global.fetch = jest.fn().mockImplementation(() => {
    var p = new Promise((resolve, reject) => {
      resolve({
        ok: true,
        Id: "123",
        json: function() {
          return [
            {
              formal_name: "string",
              common_name: "string",
              phone_number: "string",
              email_address: "string",
              address: "string",
              event_calendar: "string",
              usage_instructions: "string",
              id: 0
            }
          ];
        }
      });
    });

    return p;
  });
});

it("renders without crashing", () => {
  let store = createStore(AppReducer);

  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});

it("looks the same as before", () => {
  let store = createStore(AppReducer);

  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
