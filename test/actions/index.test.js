import * as actionTypes from "../../src/actions/types";
import * as actions from "../../src/actions";

describe("actions", () => {
  test(".exampleAction", () => {
    expect(actions.exampleAction("example")).toEqual({text: "example", type: actionTypes.EXAMPLE_ACTION});
  });
});
