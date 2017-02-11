import {ExampleForm} from "../../src/containers/example-form";
import React from "react";
import {shallow} from "enzyme";

const setup = () => {
  const props = {
    exampleAction: jest.fn(),
    state: {},
  };

  return {
    props,
    exampleForm: shallow(<ExampleForm {...props} />),
  };
};

describe("ExampleForm", () => {
  test("Initial state", () => {
    let {exampleForm} = setup();

    expect(exampleForm.state()).toEqual({exampleField: ""});
    expect(exampleForm.find("form")).toHaveLength(1);

    exampleForm = shallow(<ExampleForm exampleAction={jest.fn()} state={{exampleReducer: {example: "C"}}} />);
    expect(exampleForm.find("#globalState").text()).toEqual("Global state: {\"exampleReducer\":{\"example\":\"C\"}}");
  });

  it("updates state when typing text", () => {
    const {exampleForm} = setup();

    exampleForm.find("input[type='text']").simulate("change", {target: {value: "A"}});

    expect(exampleForm.state("exampleField")).toEqual("A");
  });

  it("calls exampleAction when submitting form", () => {
    const {exampleForm, props} = setup();

    exampleForm.find("input[type='text']").simulate("change", {target: {value: "B"}});
    exampleForm.find("form").simulate("submit", {preventDefault: jest.fn()});

    expect(props.exampleAction).toBeCalledWith("B");
  });
});
