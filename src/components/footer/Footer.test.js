import React from 'react';
import toJSON from 'enzyme-to-json';
import { createShallow } from '@material-ui/core/test-utils';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Footer from './Footer';

const setUp = (props={}) => {
  let shallowWrapper = createShallow();
  const wrapper = shallowWrapper(<Footer {...props} />);
  return wrapper;
}


describe('<Footer /> component testing', () => {
   let component;
   beforeEach(() => {
       component = setUp();
   })

   it('should match the snapshot test for  <Footer /> component', () => {
         expect(toJSON(component)).toMatchSnapshot();
   })
  it('should render <Footer /> component correctly', () => {
         expect (component.exists()).toBe(true);
   });  

});