import React from "react";
import { shallow } from "enzyme";
import Form from "../../components/Form";
  

test('test form submission', ()=>{
  const wrapper = shallow(<Form />);
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: ()=> {}
  })

  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
});

test('test form change input', ()=>{
  const value="123"
  const wrapper = shallow(<Form />);
  expect(wrapper).toMatchSnapshot()
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  })

  expect(wrapper.state('text')).toBe(value)
  expect(wrapper).toMatchSnapshot()
});


