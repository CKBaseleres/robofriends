import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

// Shallow rendering
// Only testing this components **UNIT TESTING**
// it("expect to render Card component", () => {
//   expect(shallow(<Card />).length).toEqual(1);
// });

it("expect to render Card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Arya Stark",
      username: "KillCersei",
      email: "arya@gmail.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
