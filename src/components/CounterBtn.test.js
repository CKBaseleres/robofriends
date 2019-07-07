import { shallow } from "enzyme";
import React from "react";
import CounterBtn from "./CounterBtn";

it("expect to render Card component", () => {
  const mockColor = "red";
  expect(shallow(<CounterBtn color={mockColor} />)).toMatchSnapshot();
});

it("Correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterBtn color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
  wrapper.find('[id="counter"]').simulate("keypress");
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual("red");
});
