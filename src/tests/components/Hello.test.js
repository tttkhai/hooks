import React from 'react'
import { shallow } from "enzyme";
import Hello from "../../components/Hello";
import toJSON from 'enzyme-to-json';

test("Hello should be rendered correctly", () => {
  const wrapper = shallow(<Hello />);
  // expect(wrapper).toMatchSnapshot();
  expect(toJSON(wrapper)).toMatchSnapshot()
});

test("should return 1 for length", () => {
  const wrapper = shallow(<Hello />);
  expect(wrapper.find('div').text()).toBe('showing Hello');
});

