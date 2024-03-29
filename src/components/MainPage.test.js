import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "arya",
        email: "arya@gmail.com"
      }
    ],
    searchField: "",
    isPending: false
  };

  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  // expect(wrapper2.instance().filterRobots()).toEqual([]);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "arya",
      email: "arya@gmail.com"
    }
  ]);
});

it("filters robots correctly test 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "arya",
        email: "arya@gmail.com"
      }
    ],
    searchField: "s",
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  // expect(wrapper2.instance().filterRobots()).toEqual([]);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});
