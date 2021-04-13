import React from "react";
import { shallow } from "enzyme";
import Expenses from "../../components/Expenses";
import expenses from "../fixtures/text";

test("should render Expense component dynamically", () => {
  const wrapper = shallow(<Expenses expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("test result at class expenses", () => {
  const wrapper = shallow(<Expenses expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Expense with empty message", () => {
  const wrapper = shallow(<Expenses expenses={[]} />);
  expect(wrapper.find(".expenses p").text()).toBe("Nothing");
});
