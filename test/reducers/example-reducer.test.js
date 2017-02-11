import * as actionTypes from "../../src/actions/types";
import exampleReducer from "../../src/reducers/example-reducer";

describe("exampleReducer", () => {
  test("initial state", () => {
    expect(exampleReducer(undefined, {})).toEqual({example: ""});
  });

  test ("when action type is EXAMPLE_ACTION", () => {
    expect(exampleReducer(undefined, {type: actionTypes.EXAMPLE_ACTION, text: "Testing"}))
      .toEqual({example: "Testing"});
  });
});
