import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import PrivateRoutes from './PrivateRoutes';


describe('<Routes />', () => {
   let component;
   beforeEach(() => {
      component = shallow(<PrivateRoutes />);
   });

   it('should pass snapshot testing', () => {
       expect(toJSON(component)).toMatchSnapshot();
   });

   it('should render the component correctly', () => {
       expect(component.exists()).toBe(true);
   });

});