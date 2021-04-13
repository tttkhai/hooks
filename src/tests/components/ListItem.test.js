import { shallow } from 'enzyme';
import React from 'react';
import ListItem from '../../components/ListItem';
import expenses from '../fixtures/text'

test('test ListItem component snapshot', ()=>{
    const wrapper = shallow(<ListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})