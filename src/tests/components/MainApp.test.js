import React from "react";
import MainApp from "../../components/MainApp";
import { shallow } from "enzyme";
import expenses from "../fixtures/text";

test("should render MainApp dynamically", () => {
  const wrapper = shallow(
    <MainApp
      expenses={expenses}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("test result at class expenses", () => {
    const wrapper = shallow(<MainApp expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render MainApp with empty message", () => {
  const wrapper = shallow(<MainApp expenses={[]} />);
  expect(wrapper.find('.expenses p').text()).toBe('Nothing');
});

