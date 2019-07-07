import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";

// Shallow rendering
// Only testing this components **UNIT TESTING**

it("expect to render Card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});
