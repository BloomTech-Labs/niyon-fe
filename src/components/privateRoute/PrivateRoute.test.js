import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import PrivateRoute from './PrivateRoute';


describe('<Routes />', () => {
   let component;
   beforeEach(() => {
      component = shallow(<PrivateRoute />);
   });

   it('should pass snapshot testing', () => {
       expect(toJSON(component)).toMatchSnapshot();
   });

   it('should render the component correctly', () => {
       expect(component.exists()).toBe(true);
   });

});