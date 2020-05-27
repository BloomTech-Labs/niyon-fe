import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import findByTestAttr from '../../tests/utils';
import Login from './Login';

const setUp = (props={}) => {
  const wrapper = shallow(<Login />);
  return wrapper;
}

describe('<Search /> component testing', () => {
  let component;
  beforeEach(() => {
     component = setUp();
  });

it('should pass snaps shot testing', () => {
    expect(toJSON(component)).toMatchSnapshot();
});

 it('should rende <Login /> component correctly', () => {
      expect(component.exists()).toBe(true);
      console.log(component.debug());
 })


});  