import exampleReducer from "../../src/reducers/example-reducer";

describe("exampleReducer", () => {
  test("initial state", () => {
    expect(exampleReducer(undefined, {})).toEqual({example: ""});
  });
});
