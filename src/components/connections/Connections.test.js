import React from 'react';
import { shallow } from 'enzyme';
import Connections from './Connections'
import findByTestAttr from '../../tests/utils';

const setUp = (props={}) => {
  const wrapper = shallow(<Connections { ...props } />);
  return wrapper;
}

describe('<Connections /> component testing', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it('should render <Connections /> component correctly', () => {
        const connectionsWrapper = findByTestAttr(component, 'connections');
        expect(connectionsWrapper.length).toBe(1);
    });

    it('should render a second container <Div /> correctly', () => {
         const secondWrapper = findByTestAttr(component, 'second-wrapper');
         expect(secondWrapper.exists()).toBe(true);
    });
    it('should render <Paper /> component correctly', () => {
      const wrapper = findByTestAttr(component, 'paper');
        //  expect(wrapper.find('WithStyles(ForwardRef(Paper))').length).toBe(1);
        expect(wrapper.exists()).toBe(true);
    });    
    
    it('should render mani title in the component', () => {
            const h1 = findByTestAttr(component, 'my-connections');
            expect(h1.length).toBe(1);
    });      
        
});